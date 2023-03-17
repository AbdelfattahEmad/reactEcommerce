import {GET_ERROR ,CREATE_SUB_CATEGORY} from "../type/type";
import {insertData} from "../../HOOKS/insertData";


export  const SubCategoryAction  = (formData) => async(dispatch) => {
    try {
       const response = await insertData('subcategories',formData );
       dispatch({
            type : CREATE_SUB_CATEGORY,
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
