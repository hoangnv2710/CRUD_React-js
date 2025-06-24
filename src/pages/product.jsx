import { useState } from "react";
import ProductForm from "../components/product/product.form";
import ProductTable from "../components/product/product.table";

const ProductPage = () => {

    return (<>
        <ProductForm />
        <ProductTable />
    </>)
}

export default ProductPage;