import React, { useEffect, useState } from 'react'
import { getProductCartList } from '../Api/CartApi'

const Cart = () => {
  const [productList, setProductList] = useState([])
  
  useEffect(() => {
    getProductCartList().then((result) => {
      setProductList(result.data.data)
    })
  }, [])

  const DisplayProduct = () => {
    return productList.map((product, i) => {
      return (
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {product.productName}
          </th>
          <td class="px-6 py-4">
            {product.productType}
          </td>
          <td class="px-6 py-4">
            {product.productPrice}
          </td>
          <td class="px-6 py-4">
            {product.productQuantity}
          </td>
          <td class="px-6 py-4">
            {product.productTotal}
          </td>
          <td class="px-6 py-4 text-right">
              <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
          </td>
        </tr>
      ) 
    })
  }


  return (
    <div className="table-container">
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      <th scope="col" class="px-6 py-3">
                          Name
                      </th>
                      <th scope="col" class="px-6 py-3">
                          Type
                      </th>
                      <th scope="col" class="px-6 py-3">
                          Price
                      </th>
                      <th scope="col" class="px-6 py-3">
                          Quantity
                      </th>
                      <th scope="col" class="px-6 py-3">
                          Total
                      </th>
                      <th scope="col" class="px-6 py-3">
                          <span class="sr-only">Edit</span>
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <DisplayProduct />
              </tbody>
          </table>
      </div>
    </div>
  )
}

export default Cart