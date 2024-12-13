import React, { useEffect, useState } from 'react'
import { doAddProduct } from '../Api/CartApi';

const ProductWrapper = ({product}) => {
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = async () => {
        const payload = {
            cartId: 1,
            productId: product.id,
            quantity: quantity,
        };
        
        await doAddProduct(payload);
        setQuantity('');
    };

    
    return (
        <div className="product-wrapper">
            <form className="max-w-sm mx-auto" onSubmit={(e) => e.preventDefault()}>
                <div className="mb-5 flex gap-3 items-center justify-center">
                    <label
                        for="product-name"
                        className="block text-sm font-medium text-gray-900 w-12">
                            Name
                    </label>
                    <input
                        type="text"
                        id="product-name"
                        aria-label="disabled input"
                        className="bg-gray-100 border border-gray-300 text-gray-850 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-400"
                        value={product.name}
                        disabled />
                </div>
                <div className="mb-5 flex gap-3 items-center justify-center">
                    <label
                        for="product-type"
                        className="block text-sm font-medium
                        text-gray-900 w-12">
                            Type
                    </label>
                    <input
                        type="text"
                        id="product-type"
                        aria-label="disabled input"
                        className="bg-gray-100 border border-gray-300 text-gray-850 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-400"
                        value={product.type}
                        disabled />
                </div>
                <div className="mb-5 flex gap-3 items-center justify-center">
                    <label
                        for="product-price"
                        className="block text-sm font-medium text-gray-900 w-12">
                            Price
                    </label>
                    <input
                        type="text"
                        id="product-price"
                        aria-label="disabled input"
                        className="bg-gray-100 border border-gray-300 text-gray-850 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-400"
                        value={product.price}
                        disabled />
                </div>
                <div className="mb-5 flex gap-3 items-center justify-center">
                    <label
                        for="large-input"
                        className="block text-sm font-medium text-gray-900 w-12">
                            Qty
                    </label>
                    <input
                        type="number"
                        id="number-input"
                        onChange={(e) => setQuantity(e.target.value)}
                        min="1"
                        max={product.stock}
                        aria-describedby="helper-text-explanation"
                        className="bg-gray-100 border border-gray-300 text-gray-50 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed bg-gray-700 border-gray-600 placeholder-gray-100 text-gray-50"
                        placeholder={product.stock}
                        value={quantity}
                        required />
                </div>
                <div className="product-detail">
                    <button
                        type="button"
                        onClick={handleAddToCart}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                            Add To Cart
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ProductWrapper