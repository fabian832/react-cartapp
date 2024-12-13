import axios from "axios";

export const getTransactionList = async () => {
    const product = await axios.get(`${process.env.REACT_APP_BASEURL}/transaction/get`);
    // console.log({ productList: product });
    return product;
}

export const addToTransaction = async () => {
    const transaction = await axios.get(`${process.env.REACT_APP_BASEURL}/transaction/addNewTransaction`);
    // console.log({ productList: product });
    return transaction;
}
  