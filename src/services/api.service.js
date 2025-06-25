import axiosInstance from './axios.customize'

const getUserById = async (id) => {
    const res = await axiosInstance.get(`/users/${id}`);
    return res;
}

const getAllProduct = async () => {
    const res = await axiosInstance.get('/products');
    return res
}

const postCreateProduct = async (formdata) => {
    const headers = { 'Content-Type': 'multipart/form-data' };
    const res = await axiosInstance.post('/products', formdata, { headers })
    return res;
}

const getProductById = async (id) => {
    const res = await axiosInstance.get(`/products/${id}`);
    return res;
}

const postUpdateImageProduct = async (formdata) => {
    console.log("uploading", formdata);
    const headers = { 'Content-Type': 'multipart/form-data' };
    const res = await axiosInstance.post('/products/image', formdata, { headers })
    return res;
}

const updateProduct = async (id, name, price, description, quantity, category, imageUrl) => {
    const res = await axiosInstance.patch(`/products/${id}`,
        { name, price, description, quantity, category, imageUrl }
    )
    console.log("up", res)
    return res;
}

export { getUserById, getAllProduct, postCreateProduct, getProductById, postUpdateImageProduct, updateProduct }