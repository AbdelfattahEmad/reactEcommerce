import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllAdress } from "../../Redux/Actions/UserAdressAction"
import notify from '../CategoryHooks/UseNotifiction';


const ViewAdressHooks =()=> {

    const dispatch = useDispatch()

    const [loading , setLoading] = useState(true)



    useEffect(()=>{
        const get = async()=>{
            setLoading(true)
           await dispatch(getAllAdress())
            setLoading(false)
        }
        get()
    },[])

        const getUser = useSelector((state)=>state.UserAdressReducer.getAllAdress)


    useEffect(()=>{
        if(!loading){
            if ( getUser && getUser.status === 201){
                notify("The code has been added successfully" , "success")
                window.location.reload(false)
            }
            if (getUser && getUser.status === 200){
                notify("The code has been added successfully" , "success")
                window.location.reload(false)

            }else if (getUser && getUser.status === 400){
                notify("It has already been added" , "error")
            }

         }

    },[loading])

    return {getUser}

}
export default ViewAdressHooks