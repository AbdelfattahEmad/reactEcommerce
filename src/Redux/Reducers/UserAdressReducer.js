import { ADD_ADRESS , GET_ALL_ADRESS , DELETE_ADRESS ,EDIT_ADRESS , GET_ONE_ADRESS} from "../type/type"

const inital = {
AddUserAdress: [] ,
getAllAdress  :[],
DeleteAdress :[],
EditAdress : [],
getOneAdress :[],
loading : true,
error : false
} 
 const UserAdressReducer =(state=inital , action)=>{

    switch(action.type){

        case ADD_ADRESS :
        return{
            ...state , 
            AddUserAdress : action.payload,
            loading : false,
            error :action.error
        } 
        case GET_ALL_ADRESS :
            return{
                ...state , 
                getAllAdress : action.payload,
                loading : false,
                error :action.error
            }
             case DELETE_ADRESS :
            return{
                ...state , 
                 DeleteAdress: action.payload,
                loading : false,
                error :action.error
            } 
            case EDIT_ADRESS :
                return{
                    ...state , 
                    EditAdress : action.payload,
                    loading : false,
                    error :action.error
                } 
                case GET_ONE_ADRESS :
                    return {
                        ...state , 
                        getOneAdress :action.payload , 
                        loading: false , 
                        error: action.error
                    }
        default :
        return state
        
        
        }

}
export default UserAdressReducer ;
