import axios from "axios";

export const doAddProduct = async (body) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_BASEURL}/cart/addNewProductCart`, body);
        // console.log('Successfully added to cart:', response.data);
        alert('Product added to cart successfully!');
        return response;
    } catch (error) {
        console.error('Error adding to cart: ', error.response || error.message);
        alert(`Error adding product to cart. Please try again.`);
    }
}

export const getProductCartList = async () => {
    const product = await axios.get(`${process.env.REACT_APP_BASEURL}/cart/get`);
    console.log({ productList: product });
    return product;
}
  