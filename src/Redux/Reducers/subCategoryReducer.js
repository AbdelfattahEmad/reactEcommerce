import { CREATE_SUB_CATEGORY, GET_ERROR } from "../type/type"

  const inital = {
   subCategory :[] , 
    loading : true,
    error : false
} 
const  subCategoryReducer = ( state= inital,action) =>{
    switch(action.type){
        case CREATE_SUB_CATEGORY:
            return {
                ...state,
                subCategory :action.payload , 
                loading :false,
                error:action.error
        }
        case GET_ERROR:
            return {
                ...state,
                subCategory : null, 
                loading : true,
                error: true,
                message:action.payload.message
        }
        default :
            return state 
    }
}
export default subCategoryReducer