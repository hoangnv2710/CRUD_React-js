import { useEffect, useState } from "react";
import { getAllProduct } from "../../services/api.service";
import React from 'react';
import { Button, Space, Table, Tag } from 'antd';
import ProductUpdateForm from "./product.update";

const ProductTable = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [product, setProduct] = useState(null);
    const [productsData, setProductsData] = useState([])
    const columns = [

        {
            title: 'Product name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'In stock',
            dataIndex: 'quantity',
            key: 'quantity',
        },
        {
            title: 'Sold',
            key: 'purchaseCount',
            dataIndex: 'purchaseCount',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Button onClick={() => { openUpdateModal(record) }}>
                    Edit
                </Button>
            ),
        },
    ];

    const openUpdateModal = (product) => {
        setProduct(product);
        console.log(">>><<<", product)
        setIsModalOpen(true);
    }

    const fetchData = async () => {
        const data = await getAllProduct();
        setProductsData(data);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (<>
        <Table columns={columns} dataSource={productsData} rowKey={"_id"} />
        <ProductUpdateForm setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} productData={product} setProductData={setProduct} />
    </>)
}

export default ProductTable;