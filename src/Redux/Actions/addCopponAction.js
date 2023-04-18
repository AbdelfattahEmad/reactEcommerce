
import {getDataToken, insertData  ,DeletDataToken, insertUpdateData } from "../../HOOKS/insertData";
import { ADD_COPPON , GET_ALL_COPPON , DELETE_COPPON,GET_ONE_COPPON , EDIT_COPPON} from "../type/type";


//add coppon
export  const addCoppon = (body) =>  async(dispatch) => {
    try {
       const response = await insertData(`/coupons`,body);
     
       dispatch({
            type :ADD_COPPON,
            payload : response,
        })
    } catch(e) {
        dispatch({
            type : ADD_COPPON ,
            payload : e.response,
        })
    }
}

//get all coppon 
export  const getAllCoppon = (body) =>  async(dispatch) => {
    try {
       const response = await getDataToken(`/coupons` , body);

     
       dispatch({
            type :GET_ALL_COPPON,
            payload : response,
        })
    } catch(e) {
        dispatch({
            type :GET_ALL_COPPON ,
            payload :e.response,
        })
    }
}


//get one coppon 
export  const getOneCoppon = (id) =>  async(dispatch) => {
    try {

       const response = await  getDataToken(`coupons/${id}`);
       
       console.log(response)
     
       dispatch({
            type :GET_ONE_COPPON,
            payload : response,
        })
    } catch(e) {
        dispatch({
            type :GET_ONE_COPPON ,
            payload : e.response,
        })
    }
}





//DElete copoon 
export  const deleteCoppon = (id) => async(dispatch) => {
    try {
       const response = await DeletDataToken(`/coupons/${id}`);
       
       dispatch({
            type :DELETE_COPPON,
            payload : response,
        })
    } catch(e){
        dispatch({
            type :DELETE_COPPON ,
            payload : e.response,
        })
    }
}




//edit coppon
export  const editCoppon = (id , body) =>  async(dispatch) => {
    try {
       const response = await insertUpdateData(`/coupons/${id}`, body);
       console.log(response)
     
       dispatch({
            type :EDIT_COPPON,
            payload : response,
        })
    } catch(e) {
        dispatch({
            type :EDIT_COPPON ,
            payload : e.response,
        })
    }
}
