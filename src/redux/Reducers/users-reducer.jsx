import { usersAPI } from '../../Api/Api'
import {updateObjectArray} from '../../Utils/Object-Helpers'

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET_USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'users/SET_USERS_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'users/TOGGLE_IS_FOLLOWING_IN_PROGRESS'




let initialState = {
    
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state, 
                users: updateObjectArray(state.users, 'id', action.userId, {followed: true})  
            }
        }
        case UNFOLLOW: {
            return {
                ...state, 
                users: updateObjectArray(state.users, 'id', action.userId, {followed: false})
            }
        }
        case SET_USERS: {
            return {
                ...state, 
                users: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state, 
                currentPage: action.currentPage
            }
        }
        case SET_USERS_TOTAL_COUNT: {
            return {
                ...state, 
                totalUsersCount: action.count
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state, 
                isFetching: action.isFetching
            }
        }
        case TOGGLE_IS_FOLLOWING_IN_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
}


//ActionCreators

export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setUsersTotalCount = (totalUsersCount) => ({ type: SET_USERS_TOTAL_COUNT, count: totalUsersCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingInProgress = (followingInProgress, userId) => ({ type: TOGGLE_IS_FOLLOWING_IN_PROGRESS, followingInProgress, userId });

//ThunkFunctions

export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    let data = await usersAPI.getUsersApi(currentPage, pageSize)
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setUsersTotalCount(data.totalCount));
};
export const currentPageChanger = (pageNumber, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(pageNumber))
    let data = await usersAPI.getUsersApi(pageNumber, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items));
};

export const followUnfollowFlow =  async (userid, dispatch, apiMethod, actionCreator) => {
    dispatch(toggleFollowingInProgress(true, userid));
    let data = await apiMethod(userid)
    if (data.resultCode === 0) {
        dispatch(actionCreator(userid));
    }
    dispatch(toggleFollowingInProgress(false, userid))
    dispatch(actionCreator(userid))
}

export const follow = (userid) => async (dispatch) => {
    followUnfollowFlow(userid, dispatch, usersAPI.postFollow.bind(usersAPI), followSuccess)
}


export const unfollow = (userid) => async (dispatch) => {
    followUnfollowFlow(userid, dispatch, usersAPI.deleteUnfollow.bind(usersAPI), unfollowSuccess)
}



export default usersReducer;

// //
// export const unfollow = (userid) => async (dispatch) => {
//     dispatch(toggleFollowingInProgress(true, userid));
//     let data = await usersAPI.deleteUnfollow(userid)
//     if (data.resultCode === 0) {
//         dispatch(unfollowSuccess(userid));
//     }
//     dispatch(toggleFollowingInProgress(false, userid))

//     dispatch(unfollowSuccess(userid))
// }


// state.users.map(
//     u => {
//         if (u.id === action.userId) {
//             return { ...u, followed: true }
//         }
//         return u;
//     }
// )