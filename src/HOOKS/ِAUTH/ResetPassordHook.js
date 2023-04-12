import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ResetPassword } from "../../Redux/Actions/authAction"
import notify from "../CategoryHooks/UseNotifiction"
import { useNavigate } from "react-router-dom";


const ResetPasswordHook = () =>{

    const dispatch  = useDispatch()
    const navigate = useNavigate()

 const [password, setPassword] = useState()
 const [confirmPassword, setConfirmPassord] = useState()

 const [loading , setLoading] = useState(true)

 const onChangepassword =(e)=>{
    setPassword(e.target.value)
 }

 const onChangeConfirmPassword =(e)=>{
    setConfirmPassord(e.target.value)
 }


 const onSubmit = async() => {
        if(password === ""){
            notify("please compleate the data" , "error")
            return; 
        }

    setLoading(true)

    await dispatch(ResetPassword({
         email:localStorage.setItem("user-email")
         ,
        newPassword: password
    }))
    setLoading(false)
 }
    const res = useSelector((state) => state.authReducer.resetPassword)


 useEffect(()=>{
    if(!loading) {
        if(res){
            if(res.data.status === "success"){
                notify("Password successfully changed " , "success")
                setTimeout(()=>{
                    navigate("/login")
                },1000)
            }
            if(password === confirmPassword){
                notify("worng passord" , "error")
            }

        }
    }

 },[loading])

 return [password,confirmPassword,onChangepassword , onChangeConfirmPassword, onSubmit]

}
export default ResetPasswordHook ;