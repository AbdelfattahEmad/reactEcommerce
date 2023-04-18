import {CREATE_PRODUCT,GET_ERROR , GET_ALL_PRODUCT,GET_PRODUCT_DETAILS} from "../type/type"

  const inital = {
    product:[] , 
    getAllProducts:[],
    oneProduct : [],
    loading : true,
    error : false
} 
const ProductReducer = ( state= inital , action) => {
    switch(action.type){

        case CREATE_PRODUCT:
            return {
                ...state,
                product : action.payload , 
                loading :false,
                error:action.error
        }

                 
        case GET_ALL_PRODUCT:
            return {
                ...state,
                getAllProducts: action.payload , 
                 loading :false,
                 
        }


        case GET_PRODUCT_DETAILS:
            return {
                ...state,
                oneProduct : action.payload , 
                 loading :false,
                 

        }

        case GET_ERROR:
            return {
                ...state,
                product : null, 
                loading : true,
                error: true,
                message:action.payload.message
        }
        
        default :
            return state 
    }
}
export default ProductReducer