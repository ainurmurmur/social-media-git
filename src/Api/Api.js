import * as axios from 'axios' 

const instance = axios.create ({
    withCredentials:true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers:{"API-KEY": "bb24df90-925e-4eb5-a07f-24f5b0731fe5"}
});

export const  usersAPI = {
    getUsersApi: (currentPage=1, pageSize=5) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response =>{
                return response.data
         })
        },
    getUsersId: (id) => {
       console.warn('Absolute method. Please profileAPI object');
       return profileAPI.getUsersId(id)
    },

    deleteUnfollow: (id) => {
        return instance.delete (`follow/`+id)
        .then(response => {
            return response.data    
         })
    },
    postFollow: (id) => {
        return instance.post (`follow/`+id)
        .then(response => {
            return response.data  
         })
        }
};

export const profileAPI = {
    
    getUsersId: (id) => {
  
        return  instance.get(`profile/`+ id)
             .then(response =>{
                return  response.data;
    });
     },

     getStatus: (userid) => {
         return instance.get(`profile/status/`+ userid)

    },
    updateStatus: (status) => {
        return instance.put(`profile/status`, {status:status})
   },
   savePhoto: (photo) => {
       const formData = new FormData();
       formData.append('image', photo)
       return instance.put(`profile/photo`, formData, {
           headers: {
               'Content-Type': 'multipart/form-data'
           }
       })
   },
   saveProfile: (profile) => {
    return instance.put(`profile/`, profile)
}
};


export const  headersAPI = {
    headerAuth: () => {
        return instance.get(`auth/me`)
            .then(response =>{
                return response.data
         })
        },
    login: (email, password, rememberMe = false, captcha = null) => {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
            .then(response =>{
                return response.data
         })
        },
    logout: () => {
            return instance.delete(`auth/login`)
                .then(response =>{
                    return response.data
             })
            },
    
}


export const  securityAPI = {
    getCaptchaUrl: () => {
        return instance.get(`security/get-captcha-url`)
        .then(response =>{
            return response.data
     })
}}






