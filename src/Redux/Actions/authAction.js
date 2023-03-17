import { insertData } from "../../HOOKS/insertData";
import { CREATE_NEW_USER , GET_ERROR ,LOGIN_IN } from "../type/type";



//Register action
export  const createNewUser = (data) =>  async(dispatch) => {
    try {
       const response = await insertData('auth/signup' ,data );
     
       dispatch({
            type :CREATE_NEW_USER ,
            payload : response,
            loading : true 
        })
        }catch(err) {
        dispatch({
            type : GET_ERROR ,
            payload : err,
            error : true,
        })
    }
}





// login action 
export  const loginAction = (data) =>  async(dispatch) => {
    try {
       const response = await insertData('auth/login' ,data );
     
       dispatch({
            type :LOGIN_IN,
            payload : response,
            loading : true 
        })
    } catch(err) {
        dispatch({
            type : GET_ERROR ,
            payload : err,
            error : true,
        })
    }
}



