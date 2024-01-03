import request from "../utils/request";

export const search = async (q) => {
    try {
        const res = await request.get('users/search', {
            params: {
                q,
            }
        })
        return res.data;
    }
    catch (error) {
        console.log(error);
    }
}