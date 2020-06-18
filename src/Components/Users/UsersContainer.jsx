import React from 'react';
import {connect} from 'react-redux';
import { setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching, toggleFollowingInProgress, requestUsers, currentPageChanger, follow, unfollow} from '../../redux/Reducers/users-reducer';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';
import { compose } from 'redux';
import  {withAuthRedirect} from '../HOC/withAuthRedirect';
import {getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress} from '../../redux/Selectors/users-selectors'


class UsersContainer extends React.Component  {
    
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }
    onPageChange =(pageNumber) => {
        this.props.currentPageChanger(pageNumber,this.props.pageSize)
    }
    
    render() {      
        return  <>
         <div>{this.props.isFetching ? <Preloader /> : null}</div> 
             <Users totalItemsCount ={this.props.totalItemsCount}
                        pageSize = {this.props.pageSize}
                        currentPage = {this.props.currentPage}
                        onPageChange = {this.onPageChange}
                        users = {this.props.users}
                        followingInProgress = {this.props.followingInProgress} 
                        follow ={this.props.follow}
                        unfollow ={this.props.unfollow}
        />
        </>
    };
    }

let mapStateToProps = (state)=> {
    return {
            users:getUsers(state),
            pageSize: getPageSize(state),
            totalItemsCount: getTotalUsersCount(state),
            currentPage: getCurrentPage(state),
            isFetching: getIsFetching(state),
            followingInProgress:getFollowingInProgress(state),
    }
}


export default compose (withAuthRedirect, connect(mapStateToProps, { setUsers, setUsersTotalCount,
    setCurrentPage, toggleIsFetching, toggleFollowingInProgress, requestUsers, follow, unfollow, currentPageChanger })) (UsersContainer);



/* Предыдущий вариант 
 let mapStateToDispatch =(dispatch) => {
    return {
        follow: (userId) => {
            return dispatch(followActionCreator(userId))
        },
        unfollow: (userId) => {
            return dispatch(unfollowActionCreator(userId))
        },
        setUsers: (users) => {
            return dispatch(setUsersActionCreator(users))
        },
        setCurrentPage: (pageNumber) => {
            return dispatch(setCurrentPageActionCreator(pageNumber))
        },
        setUsersTotalCount: (totalCount) => {
            return dispatch(setUsersTotalCountActionCreator(totalCount))
        },
        toggleIsFetching: (isFetching) => {
            return dispatch(toggleIsFetchingActionCreator(isFetching))
        }
    }
} */

//Dispatch

/* this.props.toggleIsFetching(true)
             usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data =>{
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items);  
                this.props.setUsersTotalCount(data.totalCount);
            }); */

/* this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
            usersAPI.getUsers(pageNumber, this.props.pageSize).then(data =>{
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items);    
        }); */

        
//Before compose () () 

/* 
export default connect(mapStateToProps, { setUsers, setUsersTotalCount,
    setCurrentPage, toggleIsFetching, toggleFollowingInProgress, getUsers, follow, unfollow, currentPageChanger }) (UsersContainer);  */