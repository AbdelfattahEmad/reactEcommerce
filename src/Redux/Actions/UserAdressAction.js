import { insertData , getDataToken , DeletDataToken, insertUpdateData} from "../../HOOKS/insertData"
import { ADD_ADRESS , GET_ALL_ADRESS , DELETE_ADRESS , EDIT_ADRESS ,GET_ONE_ADRESS} from "../type/type"



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
                type : GET_ALL_ADRESS,
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


    //get one adress

    export  const getOneAdress = (id ) => async( dispatch)=>{
        try{
            const response = await getDataToken(`addresses/${id}`)

            dispatch({
                type : GET_ONE_ADRESS,
                payload: response ,
            })
            }catch(e){
            dispatch({
                type : GET_ONE_ADRESS,
                payload:e.response,
            })

        }

    }





    // edit adress
    export  const editAdress = (id , body) =>  async(dispatch) => {
        try {
           const response = await insertUpdateData(`/addresses/${id}`, body);
         
           dispatch({
                type :EDIT_ADRESS,
                payload : response,
            })
        } catch(e) {
            dispatch({
                type :EDIT_ADRESS ,
                payload : e.response,
            })
        }
    }
    






