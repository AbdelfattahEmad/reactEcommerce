import { insertData , getDataToken , DeletDataToken} from "../../HOOKS/insertData"
import { ADD_ADRESS , GET_ALL_ADRESS , DELETE_ADRESS} from "../type/type"



//addAdress
  export  const AddAdress = (body) => async( dispatch)=>{
        try{
            const response = await insertData(`addresses`,body)

            dispatch({
                type : ADD_ADRESS,
                payload: response ,
            })
            dispatch({
                type : GET_ALL_ADRESS,
                payload: response ,
            })



            }catch(e){
            dispatch({
                type : ADD_ADRESS,
                payload: e.response,
            })

        }

    }

//get All adress

    export  const getAllAdress = () => async( dispatch)=>{
        try{
            const response = await getDataToken('addresses')

            dispatch({
                type : GET_ALL_ADRESS,
                payload: response ,
            })
            }catch(e){
            dispatch({
                type : ADD_ADRESS,
                payload:e.response,
            })

        }

    }


//delete Adress

    export  const DeleteAdress = (id) => async( dispatch)=>{
        try{
            const response = await DeletDataToken(`addresses/${id}`)
            console.log(response)

            dispatch({
                type : DELETE_ADRESS,
                payload: response ,
            })
            }catch(e){
            dispatch({
                type : DELETE_ADRESS,
                payload:e.response,
            })
        }
    }






