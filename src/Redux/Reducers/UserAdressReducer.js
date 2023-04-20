import { ADD_ADRESS , GET_ALL_ADRESS , DELETE_ADRESS} from "../type/type"

const inital = {
AddUserAdress: [] ,
getAllAdress  :[],
DeleteAdress :[],
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

        default  :
        return state
        
        
        }

}
export default UserAdressReducer ;
