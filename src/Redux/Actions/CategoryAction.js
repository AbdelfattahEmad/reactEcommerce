import baseUrl from "../../Api/BaseUrl";
import {GET_ERROR , GET_ALL_CATEGORY, CREATE_CATEGORY, GET_ONE_CATEGORY } from "../type/type";
import {insertDataWithImg} from "../../HOOKS/insertData";



// get All Category 
 export const getCategoryAction =()=>  async(dispatch) => {
    try {
       const response = await baseUrl.get("categories");
       dispatch({
            type : GET_ALL_CATEGORY ,
            payload : response.data.data,
            error: false
        })
    } catch(err) {
        dispatch({
            type : GET_ERROR ,
            payload : err,
            error : true,
        })
    }
}



// create new Category 
export  const createCategory  = (formData) =>  async(dispatch) => {
    try {
       const response = await insertDataWithImg('categories' ,formData );
     
       dispatch({
            type :CREATE_CATEGORY ,
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





export const getOneCategoryAction =()=>  async(dispatch) => {
    try {
       const response = await baseUrl.get(`categories/`);
       dispatch({
            type : GET_ONE_CATEGORY ,
            payload : response.data.data,
            error: false
        })
    } catch(err) {
        dispatch({
            type : GET_ERROR ,
            payload : err,
            error : true,
        })
    }
}


export default getCategoryAction;