import { CREATE_NEW_USER ,LOGIN_IN,GET_ERROR ,FORGET_PASSWORD ,VERIFY_PASSWORD  ,RESET_PASSWORD , AUTO_LOGIN , LOG_OUT , 
UPDATE_USER_DATA
} from "../type/type"

  const inital = {
   createUser:[] , 
   user:null,
   forgetPassord:[],
   verifyPassord:[],
   resetPassword : [],
   updateUserData :[],

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
        }
        case LOGIN_IN :
            return {
                ...state,
                user:action.payload , 
                error:action.error
        }
        case FORGET_PASSWORD  :
            return {
                ...state,
                forgetPassord: action.payload , 
                error:action.error
        }


        case VERIFY_PASSWORD :
            return {
                ...state,
                verifyPassord: action.payload , 
                error:action.error
        }
        case RESET_PASSWORD :
            return {
                ...state,
                resetPassword: action.payload , 
                error:action.error
        }  
        case  AUTO_LOGIN :
        return {
            ...state,
            user: action.payload , 
            error:action.error
    }
    case  LOG_OUT :
        return {
            ...state,
            user: action.payload , 
            error:action.error
    }
    case UPDATE_USER_DATA :
        return {
            ...state,
            updateUserData : action.payload , 
            error:action.error
    }
        case GET_ERROR :
            return {
                ...state,
                error: action.payload
            }

        default :
            return state 
    }
}
export default authReducer