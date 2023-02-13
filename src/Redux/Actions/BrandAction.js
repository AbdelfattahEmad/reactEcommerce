import baseUrl from "../../Api/BaseUrl";
import {GET_ERROR ,  CREATE_CATEGORY, GET_ALL_BRAND } from "../type/type";
import {useInsertDataWithImg} from "../../HOOKS/insertData";



// get All Brand
const getAllBrand  = () =>  async(dispatch) => {
    try {
       const response = await baseUrl.get("brands");
       console.log(response)
       dispatch({
            type : GET_ALL_BRAND ,
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



// create new Brand
export  const createBrand  = (formData) =>  async(dispatch) => {
    try {
       const response = await useInsertDataWithImg('brands' ,formData );
     
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

export default getAllBrand;