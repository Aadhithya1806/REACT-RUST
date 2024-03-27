import React from "react";

const ProductList = ({ products }) => {
    return (
        <div className="product-list w-full">
            <h2 className="align-center">Products</h2>
            <ul className="flex-column bg-stone-700 ">
                {products.map((product, index) => (
                    <li key={index} className="flex justify-between ">
                        <p>{index + 1}</p>
                        <strong>{product.name}</strong>
                        {product.price.toFixed(2)}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
