import { useState } from 'react';
import { Button, Input, InputNumber, Modal } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useEffect } from 'react';
import { postUpdateImageProduct, updateProduct } from '../../services/api.service';


const ProductUpdateForm = ({ isModalOpen, setIsModalOpen, productData, setProductData }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()

    useEffect(() => {
        if (productData) fillData();
    }, [productData])

    const fillData = () => {
        setName(productData.name);
        setPrice(productData.price);
        setDescription(productData.description);
        setQuantity(productData.quantity);
        setCategory(productData.category);
        setPreview(import.meta.env.VITE_BACKEND_URL + '/' + productData.imageUrl);
    }

    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined);
            return
        }
        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }
        setSelectedFile(e.target.files[0]);
        e.target.value = null;
    }

    const uploadImage = async () => {
        const formData = new FormData();
        formData.append("image", selectedFile);
        const newImgUrl = await postUpdateImageProduct(formData);
        console.log("uri upload", newImgUrl);
        return newImgUrl;
    }

    const submitForm = async () => {
        console.log("pre", selectedFile);
        const newImgUrl = selectedFile ? await uploadImage() : (productData.imageUrl);
        console.log(productData._id, name, price, description, quantity, category, newImgUrl)
        updateProduct(productData._id, name, price, description, quantity, category, newImgUrl)
        resetAndCloseModal();
    };
    const resetAndCloseModal = () => {
        setIsModalOpen(false);
        setName('');
        setPrice(0);
        setDescription('');
        setQuantity(0);
        setCategory('');
        setSelectedFile(undefined);
        URL.revokeObjectURL(preview);
        setPreview(undefined);
        setProductData(null)
    };

    return (<div className='form-container'>
        <Modal
            title="Basic Modal"
            closable={{ 'aria-label': 'Custom Close Button' }}
            open={isModalOpen}
            onOk={submitForm}
            onCancel={resetAndCloseModal}
            maskClosable={false}
        >
            <div className="input-container">
                <label htmlFor="file-upload" className="upload-btn">
                    <div className="upload-box">
                        <span>Upload image</span>
                    </div>
                </label>
                <input id="file-upload" type="file" accept="image/*" onChange={onSelectFile} style={{ display: "none" }} />
                {preview && <img src={preview} width='100%' />}
            </div>

            <div className="input-container">
                <div className="input-label">Product Name</div>
                <Input value={name} onChange={e => setName(e.target.value)} />
            </div>

            <div className="input-container">
                <div className="input-label">Price</div>
                <InputNumber value={price} prefix="₫" style={{ width: '200px' }} min="0" step="100" stringMode size='' onChange={(value) => { setPrice(value) }} />
            </div>

            <div className="input-container">
                <div className="input-label">Quantity</div>
                <InputNumber value={quantity} min={0} defaultValue={0} style={{ width: '100px' }} onChange={(value) => { setQuantity(value) }} />
            </div>

            <div className="input-container">
                <div className="input-label">Description</div>
                <TextArea value={description} autoSize={{ minRows: 3, maxRows: 5 }} onChange={e => setDescription(e.target.value)} />
            </div>

            <div className="input-container">
                <div className="input-label">Category</div>
                <Input value={category} onChange={e => setCategory(e.target.value)} />
            </div>
        </Modal>
    </div>)
}

export default ProductUpdateForm;