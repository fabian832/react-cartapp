import React, { useEffect, useState } from 'react'
import { getProductCartList, removeProductFromCart } from '../Api/CartApi'
import { addToTransaction } from '../Api/TransactionApi'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const [productList, setProductList] = useState([])
  const [removeProduct, setRemoveProduct] = useState(false)
  const navigate = useNavigate(); // Get the navigate function
  
  useEffect(() => {
    getProductCartList().then((result) => {
      setProductList(result.data.data)
    })

    setRemoveProduct(false);
  }, [removeProduct])
  
  const removeFromCart = async (product) => {
      const payload = {
          cartId: 1,
          productId: product.productId,
      };
      await removeProductFromCart(payload);

      setRemoveProduct(true);
  };
  
  const transactionButton = async () => {
      alert('Press okay to process the cart');
      await addToTransaction();
      navigate('/transaction');
  };

  const DisplayProduct = () => {
    return productList.map((product, i) => {
      return (
        <tr key={product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-600">
          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {product.productName}
          </th>
          <td className="px-6 py-4">
            {product.productType}
          </td>
          <td className="px-6 py-4">
            {product.productPrice}  
          </td>
          <td className="px-6 py-4">
            {product.quantity}
          </td>
          <td className="px-6 py-4">
            {product.productTotal}
          </td>
          <td className="px-6 py-4 text-right flex flex-col">
            <button
                type="button"
                onClick={() => removeFromCart(product)}
                className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
                    Remove
            </button>
            <a
                type="button"
                href="/"
                className="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">
                    Edit
            </a>
          </td>
        </tr>
      ) 
    })
  }


  return (
    <div className="table-container">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      <th scope="col" className="px-6 py-3">
                          Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Type
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Price
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Quantity
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Total
                      </th>
                      <th scope="col-2" className="px-6 py-3">
                          Action
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <DisplayProduct />
              </tbody>
          </table>
      </div>
      <div className="button-transaction flex justify-center">
        <button type="button" onClick={transactionButton} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-lg px-5 py-2.5 me-2 my-10">Process to Transaction</button>
      </div>
    </div>
  )
}

export default Cart