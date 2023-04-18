import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import notify from '../CategoryHooks/UseNotifiction';
import { addCoppon, getAllCoppon } from "../../Redux/Actions/addCopponAction";
import { AddAdress } from "../../Redux/Actions/UserAdressAction";


const UserAdressHook =(id)=> {

    const dispatch = useDispatch()

    const [alias ,setAlias] = useState([""])
    const [details ,setDetails] = useState([""])
    const [phone ,setPhone] = useState(0)
    const [loading ,setLoading] = useState(true)



    const onChangeAlias =(event)=>{
        event.persist()
        setAlias(event.target.value)

    }

    const onChangeDetails =(event)=>{
        event.persist()
        setDetails(event.target.value)

        
    }


    const onChangePhone =(event)=>{
        event.persist()
        setPhone(event.target.value)
    }

    const onSubmit = async()=>{

        if(alias === "" || details === "" || phone.length < 11 ){

            notify("please compleate the data " , "warn")
            return;
        }
        setLoading(true)
        await dispatch(AddAdress({
            alias: alias,
            details:details,
            phone: phone,
            city: "",
            postalCode: "",
        }))
        setLoading(false)
    }

     const userAdress = useSelector((state)=>state.UserAdressReducer.AddUserAdress)

    useEffect(()=>{
        if(loading === false){
            if (userAdress && userAdress.status === 201){
                notify("The code has been added successfully" , "success")

                window.location.reload(false)
            
            }else if (userAdress && userAdress.status === 400){
                notify("It has already been added" , "error")
            }
        }

    },[loading])

    return{alias,onChangeAlias ,details,onChangeDetails,phone,onChangePhone,onSubmit }
}

export default  UserAdressHook