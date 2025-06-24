import axiosInstance from './axios.customize'

const getUserById = async (id) => {

    const res = await axiosInstance.get(`/users/${id}`);

    return res;
}

const getAllProduct = async () => {
    const res = await axiosInstance.get('/products');
    return res
}

export { getUserById, getAllProduct }