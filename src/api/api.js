import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "014ce6ed-d671-4ca2-9494-ac8550f050b5"
    }
})

export const usersAPI = {
    getUsers(page = 1, pageSize = 10) {
        return instance.get(`users?page=${page}&count=${pageSize}`)
            .then(response => response.data)
    }
}

export const followAPI = {
    follow(id) {
        return instance.post(`follow/${id}`, {})
            .then(response => {
                return response.data
            })
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            })
    }
}

export const profileAPI = {
    getUserProfile(id) {
        return instance.get(`profile/${id}`)
            .then(response => {
                return response.data
            })
    },
    getUserStatus(userId) {
        return instance.get(`profile/status/${userId}`)
            .then(response => {
                return response.data
            })
    },
    updateUserStatus(status) {
        return instance.put(`profile/status`, {status: status})
    }
}

export const authAPI = {
    me() {
        return instance.get('auth/me')
            .then(response => response.data)
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete('auth/login')
    }
}
