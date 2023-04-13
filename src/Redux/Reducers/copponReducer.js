import { ADD_COPPON , GET_ALL_COPPON , DELETE_COPPON , GET_ONE_COPPON , EDIT_COPPON} from "../type/type";

  const inital = {
    addCoppon:[] ,
    getAllCoppon:[] ,
    deleteCoppon : [], 
    getOneCoppon:[],
    EditCoppon :[],
    loading : true,
    error : false
} 
const CopponReducer = ( state= inital , action) =>{
    switch(action.type){
        case ADD_COPPON :
            return {
                ...state,
                addCoppon: action.payload , 
                loading :false,
        }

        case GET_ALL_COPPON:
            return {
                ...state,
               getAllCoppon: action.payload , 
                loading :false,
                
        }

        case DELETE_COPPON:
            return {
                ...state,
                deleteCoppon : action.payload , 
                loading :false,
                
        }
        case GET_ONE_COPPON:
            return {
                ...state,
               getOneCoppon: action.payload , 
                loading :false,
                


        }
        case EDIT_COPPON:
            return {
                ...state,
               EditCoppon: action.payload , 
                loading :false,
            }
                
        default :
            return state 
    }
}
export default CopponReducer