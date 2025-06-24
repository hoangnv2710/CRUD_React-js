import { useEffect, useState } from "react";
import { getAllProduct } from "../../services/api.service";
import React from 'react';
import { Button, Space, Table, Tag } from 'antd';

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
        render: () => (
            <Button>

            </Button>
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