import { ADD_ADRESS } from "../type/type"

const inital = {
AddUserAdress: [] ,
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
        default  :
        return state
        
        
        }

}
export default UserAdressReducer ;
