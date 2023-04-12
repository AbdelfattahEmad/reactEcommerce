import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ForgetPasswords } from "../../Redux/Actions/authAction"
import notify from "../CategoryHooks/UseNotifiction"
import { useNavigate } from "react-router-dom";


const ForgetPasswordHook = () =>{

    const dispatch  = useDispatch()
    const navigate = useNavigate()

 const [email , setEmail] = useState()
 const [loading , setLoading] = useState(true)

 const onChangeEmail =(e)=>{
    setEmail(e.target.value)
 }

 const onSubmit = async() => {
        if(email === ""){
            notify("please compleate the data" , "error")
            return; 
        }
        localStorage.getItem("user-email")


    setLoading(true)

    await dispatch(ForgetPasswords({
        email,

    }))
    setLoading(false)


 }
 const res = useSelector((state) =>state.authReducer.forgetPassord)


 useEffect(()=>{
    if(!loading) {
        if(res){
            console.log(res)
            if(res.data.status === "success"){
                notify("message sent " , "success")
                setTimeout(()=>{
                    navigate("/user/veriyfy-code")

                },1000)
            }
            if(res.data.status === "failed"){
                notify(" mistake" , "error")
            }

        }
    }

 },[loading])

 return [ email , onChangeEmail ,  onSubmit]

}
export default ForgetPasswordHook