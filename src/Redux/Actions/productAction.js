import { getData, insertDataWithImg } from "../../HOOKS/insertData";
import { CREATE_PRODUCT, GET_ERROR , GET_ALL_PRODUCT,GET_PRODUCT_DETAILS } from "../type/type";


// Get all Product
export  const getAllProduct = (formData) =>  async(dispatch) => {
    try {
       const response = await getData('products');
       console.log(response)
     
       dispatch({
            type :GET_ALL_PRODUCT,
            payload : response,
            loading : true 
        })
    } catch(err) {
        dispatch({
            type : GET_ERROR ,
            payload : err,
            error : true,
        })
    }
}


//get product with id 
export  const getOneProduct = (formData) =>  async(dispatch) => {
    try {
       const response = await getData(`products/`);
     
       dispatch({
            type :GET_PRODUCT_DETAILS,
            payload : response,
            loading : true 
        })
    } catch(err) {
        dispatch({
            type : GET_ERROR ,
            payload : err,
            error : true,
        })
    }
}






// create new PRODUCT
export  const createProduct = (formData) =>  async(dispatch) => {
    try {
       const response = await insertDataWithImg('/api/v1/products?&name= car&id=1&price=5&priceAfterD=2');
     
       dispatch({
            type :CREATE_PRODUCT,
            payload : response,
            loading : true 
        })
    } catch(err) {
        dispatch({
            type : GET_ERROR ,
            payload : err,
            error : true,
        })
    }
}
