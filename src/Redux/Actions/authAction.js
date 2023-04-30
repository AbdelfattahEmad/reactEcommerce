import { insertData, put } from "../../HOOKS/insertData";
import { CREATE_NEW_USER , GET_ERROR ,LOGIN_IN  , FORGET_PASSWORD , VERIFY_PASSWORD ,
     RESET_PASSWORD , AUTO_LOGIN ,UPDATE_USER_DATA} from "../type/type";



//Register action
export  const createNewUser = (data) =>  async (dispatch) => {
    try {
        const response = await insertData('auth/signup' ,data );
       dispatch({
            type : CREATE_NEW_USER ,
            payload : response,
            loading : true 
        })

        } catch(err) {
        dispatch({
            type : GET_ERROR ,
            payload : err?.response?.data?.errors,
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





//1-forget password 

export  const ForgetPasswords = (data) =>  async(dispatch) => {
    try {
       const response = await insertData(`auth/forgotPasswords`,data );
     
       dispatch({
            type :FORGET_PASSWORD,
            payload : response,
            loading : true 
        })
    } catch(err) {
        dispatch({
            type : FORGET_PASSWORD ,
            payload : err,
            error : true,
        })
    }
}

// 2-verfy pasword 

export  const verifyPasswords = (data) =>  async(dispatch) => {
    try {
       const response = await insertData(`auth/verifyResetCode`,data );
     
       dispatch({
            type :VERIFY_PASSWORD,
            payload : response,
            loading : true 
        })
    } catch(err) {
        dispatch({
            type : VERIFY_PASSWORD ,
            payload : err,
            error : true,
        })
    }
}


//3-reset passsword
export  const ResetPassword = (data) =>  async(dispatch) => {
    try {
       const response = await put(`auth/resetPassword`,data );
     
       dispatch({
            type :RESET_PASSWORD,
            payload : response,
            loading : true 
        })
    } catch(err) {
        dispatch({
            type : RESET_PASSWORD ,
            payload : err,
            error : true,
        })
    }
}


export  const autoLogin = () =>  async(dispatch) => {
    const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : (null)
    const token = localStorage.getItem("token") ? (localStorage.getItem("token")) : (null)

    if(user && token){
       dispatch({
            type :AUTO_LOGIN,
            payload : {data :{
                data:user , token : token
            }},
            loading : false 
        })
}
}



//update userData 
export  const UpdateUser = (body) =>  async(dispatch) => {
    try {
       const response = await put("/users/updateMe",body);
     
       dispatch({
            type : UPDATE_USER_DATA,
            payload : response,
            loading : true 
        })
    } catch(err) {
        dispatch({
            type : UPDATE_USER_DATA ,
            payload : err,
            error : true,
        })
    }
}


    








