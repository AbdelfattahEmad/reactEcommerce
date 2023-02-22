import {GET_ERROR ,CREATE_SUB_CATEGORY} from "../type/type";
import {useInsertData} from "../../HOOKS/insertData";


export  const SubCategoryAction  = (formData) => async(dispatch) => {

    try {

       const response = await useInsertData('subcategories',formData );
     
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
