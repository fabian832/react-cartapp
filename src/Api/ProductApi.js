import axios from "axios";

export const getProductList = async () => {
    const product = await axios.get(`${process.env.REACT_APP_BASEURL}/product/get`);
    // console.log({ productList: product });
    return product;
}