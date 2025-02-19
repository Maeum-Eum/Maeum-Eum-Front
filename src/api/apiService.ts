import { apiClient } from "./api";
import { API_ROUTES } from "./apiRoutes";

export const authService = {
    login: async (credentials : {id: string; password: string}) => {
        const response = await apiClient.post(API_ROUTES.AUTH.LOGIN, credentials);
        return response.data;
    }
}

// 이력서 등록
export const submitResume = async () => {
    try {
        const response = await apiClient.post(API_ROUTES.CAREGIVER.RESUME_CREATE)
        return response.data;
       
    } catch(error) {
        console.error("Failed to submit resume", error);
        throw error;
    }
}

// 이력서 조회
export const getResume = async () => {
    try {
        const response = await apiClient.get(API_ROUTES.CAREGIVER.RESUME)
        return response.data;
    } catch (error) {
        console.error("Failed to fetch resume", error);
        throw error;
    }
}