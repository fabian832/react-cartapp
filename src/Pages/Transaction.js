import React, { useEffect, useState } from 'react'
import { getTransactionList } from '../Api/TransactionApi'

const Transaction = () => {
  const [productList, setProductList] = useState([])
    
    useEffect(() => {
        getTransactionList().then((result) => {
            setProductList(result.data.data);
        });
    }, []);

    console.log(productList);
    const groupedProducts = productList.reduce((acc, product) => {
        const key = `${product.name}-${product.transactionId}-${product.address}`;
        if (!acc[key]) {
          acc[key] = {
            name: product.name,
            transactionId: product.transactionId,
            address: product.address,
            products: []
          };
        }
        acc[key].products.push(product);
        return acc;
      }, {});

    const DisplayProduct = (products) => {
        return products.map((product, i) => (
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
            </tr>
        ));
    };

  const renderTables = () => {
    return Object.keys(groupedProducts).map((key) => {
        const { name, transactionId, address, products } = groupedProducts[key];
        return (
          <div key={key} className="table-container mb-6">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th colSpan={5} className="px-6 py-3 text-center text-lg font-bold">
                      Transaction ID: {transactionId}
                    </th>
                  </tr>
                  <tr>
                    <th colSpan={5} className="px-6 py-3 text-center text-lg font-bold">
                      Name: {name}
                    </th>
                  </tr>
                  <tr>
                    <th colSpan={5} className="px-6 py-3 text-center text-lg font-bold">
                      Address: {address}
                    </th>
                  </tr>
                  <tr>
                    <th scope="col" className="px-6 py-3">Name</th>
                    <th scope="col" className="px-6 py-3">Type</th>
                    <th scope="col" className="px-6 py-3">Price</th>
                    <th scope="col" className="px-6 py-3">Quantity</th>
                    <th scope="col" className="px-6 py-3">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {DisplayProduct(products)}
                </tbody>
              </table>
            </div>
          </div>
        );
      });
  };

  return (
    <div>
      {renderTables()}
    </div>
  );
};

export default Transaction;