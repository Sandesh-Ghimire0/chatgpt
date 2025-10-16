import axios from "axios";

export const logoutUser = async () => {
    try {
        const res = await axios.post(
            `${import.meta.env.VITE_BASE_URL}/api/v1/auth/logout`,
            {},
            {
                withCredentials: true,
            }
        );
        return res;
    } catch (error) {
        console.log("Failed to logout ", error);
        return error;
    }
};

export const getMyProfile = async () => {
    try {
        const res = await axios.get(
            `${import.meta.env.VITE_BASE_URL}/api/v1/auth/me`,
            {
                withCredentials: true,
            }
        );
        return res;
    } catch (error) {
        console.log("Failed to fetch profile data : ", error);
        return error;
    }
};
