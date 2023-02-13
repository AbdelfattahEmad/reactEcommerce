import { CREATE_CATEGORY, GET_ALL_CATEGORY , GET_ERROR } from "../type/type"

  const inital = {
    category :[] , 
    loading : true,
    error : false
} 
const CategoryReducer = ( state= inital , action) =>{
    switch(action.type){
        case GET_ALL_CATEGORY:
            return {
                ...state,
                category : action.payload , 
                loading :false,
                error:action.error
        }
        case CREATE_CATEGORY:
            return {
                ...state,
                category : action.payload , 
                 loading :false,

        }
        case GET_ERROR:
            return {
                ...state,
                category : null, 
                loading : true,
                error: true,
                message:action.payload.message
        }
        default :
            return state 
    }
}
export default CategoryReducer