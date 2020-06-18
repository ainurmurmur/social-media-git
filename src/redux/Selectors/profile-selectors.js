export const getProfile =(state) => {
    return state.profilePage.profile
}
export const getStatusSelector =(state) => {
    return state.profilePage.status
}
export const getAuthorizedUserId =(state) => {
    return state.auth.userId
}
export const getIsAuth =(state) => {
    return state.auth.isAuth
}