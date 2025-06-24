import axiosInstance from './axios.customize'

const getUserById = async (id) => {

    const res = await axiosInstance.get(`/users/${id}`);

    return res;
}

const getAllProduct = async () => {
    const res = await axiosInstance.get('/products');
    return res
}

export const postCreateProduct = async (formdata) => {
    console.log("uploading", formdata);
    const headers = { 'Content-Type': 'multipart/form-data' };
    const res = await axiosInstance.post('/products', formdata, { headers })
    console.log(res);
    return res;
}

export { getUserById, getAllProduct }