import { insertData} from "../../HOOKS/insertData"
import { ADD_ADRESS } from "../type/type"



  export  const AddAdress = (body) => async( dispatch)=>{
        try{
            const response = await insertData(`addresses`,body)
            console.log(response)

            dispatch({
                type : ADD_ADRESS,
                payload: response ,
            })

            }catch(e){
            dispatch({
                type : ADD_ADRESS,
                payload: e.response,
            })

        }

    }


