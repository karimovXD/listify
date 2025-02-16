import { AuthFormType, AuthResponse } from '@/types/auth.types'
import { axiosInstance } from '@/api/axiosInstance'
import { removeFromStorage, saveTokenStorage } from './auth-token.service'

const handleAuthResponse = (response: { data: AuthResponse }) => {
    if (response.data.accessToken) saveTokenStorage(response.data.accessToken)
    return response
}

export const authService = {

    async register(data: AuthFormType) {
        try {
            const response = await axiosInstance.post<AuthResponse>('/auth/register', data);
            return handleAuthResponse(response)
        } catch (error) {
            console.log("register error:", error);
        }
    },

    async login(data: AuthFormType) {
        try {
            const response = await axiosInstance.post<AuthResponse>('/auth/login', data);
            return handleAuthResponse(response)
        } catch (error) {
            console.log("login error:", error);
        }
    },

    async getNewTokens() {
        const response = await axiosInstance.post<AuthResponse>(
            '/auth/login/access-token'
        )

        if (response.data.accessToken) saveTokenStorage(response.data.accessToken)

        return response
    },

    async logout() {
        const response = await axiosInstance.post<boolean>('/auth/logout')

        if (response.data) removeFromStorage()

        return response
    }
}

