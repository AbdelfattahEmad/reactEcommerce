import { CREATE_NEW_USER ,LOGIN_IN } from "../type/type"

  const inital = {
   createUser:[] , 
   LOGIN:[],
    loading : true,
    error : false
} 
const authReducer = ( state= inital , action) =>{
    switch(action.type){
        case CREATE_NEW_USER:
            return {
                ...state,
                createUser : action.payload , 
                loading :false,
                error:action.error
        }
        case LOGIN_IN :
            return {
                ...state,
                login: action.payload , 
                error:action.error
        }


        default :
            return state 
    }
}
export default authReducer