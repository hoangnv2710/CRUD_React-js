import { useState } from 'react';
import { Button, Input, InputNumber, Modal } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useEffect } from 'react';
import { postCreateProduct } from '../../services/api.service';


const ProductForm = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()

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
        setSelectedFile(e.target.files[0])
    }

    const submitForm = () => {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("price", price);
        formData.append("quantity", quantity);
        formData.append("description", description);
        formData.append("category", category);
        formData.append("image", selectedFile);
        postCreateProduct(formData);
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
        setPreview(undefined);
    };

    return (<div className='form-container'>
        <Button type="primary" onClick={() => setIsModalOpen(true)}>
            Create Product
        </Button>
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
                {selectedFile && <img src={preview} width='100%' />}
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

export default ProductForm;