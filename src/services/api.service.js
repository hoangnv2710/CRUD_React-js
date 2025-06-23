import axiosInstance from './axios.customize'

const getUserById = async (id) => {

    const response = await axiosInstance.get(`/v1/api/users/${id}`);

    return response;
}

export { getUserById }