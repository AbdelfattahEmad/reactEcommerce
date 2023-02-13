import { CREATE_BRAND, GET_ALL_BRAND , GET_ERROR } from "../type/type"

  const inital = {
    Brand:[] , 
    loading : true,
    error : false
} 
const BrandReducer = ( state= inital , action) =>{
    switch(action.type){
        case GET_ALL_BRAND:
            return {
                ...state,
               brand: action.payload , 
                loading :false,
                error:action.error
        }
        case CREATE_BRAND:
            return {
                ...state,
                brand: action.payload , 
                 loading :false,

        }
        case GET_ERROR:
            return {
                ...state,
                brand : null, 
                loading : true,
                error: true,
                message:action.payload.message
        }
        default :
            return state 
    }
}
export default BrandReducer