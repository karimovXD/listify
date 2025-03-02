import { axiosWithAuth } from "@/api/axiosWithAuth";
import { TypeUserForm, User } from "@/types/auth.types";

export interface ProfileResponse {
    user: User
    statistics: {
        label: string
        value: string
    }[]
}

class UserService {
    private BASE_URL = '/user/profile';

    async getProfile() {
        const response = await axiosWithAuth.get<ProfileResponse>(this.BASE_URL);
        return response.data
    }

    async setProfile(data: TypeUserForm) {
        const response = await axiosWithAuth.put(this.BASE_URL, data);
        return response.data
    }
}

export const userService = new UserService()