import { useEffect, useState } from "react";
import { getAllProduct } from "../../services/api.service";
import React from 'react';
import { Space, Table, Tag } from 'antd';

const columns = [
    {
        title: 'Product name',
        dataIndex: 'name',
        key: 'name',
        // render: text => <a>{text}</a>,
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
            <Space size="middle">
                <a>Invite {record.name}</a>
                <a>Delete</a>
            </Space>
        ),
    },
];

const ProductTable = () => {
    const [productsData, setProductsData] = useState([])
    const fetchData = async () => {
        const data = await getAllProduct();
        setProductsData(data);
    }
    useEffect(() => {
        fetchData();

    }, [])
    console.log(productsData);
    return (<>
        <Table columns={columns} dataSource={productsData} rowKey={"_id"} />
    </>)
}

export default ProductTable;