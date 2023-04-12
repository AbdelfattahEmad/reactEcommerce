import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import notify from "../CategoryHooks/UseNotifiction"
import { useNavigate } from "react-router-dom";
import { verifyPasswords } from "../../Redux/Actions/authAction";


const VerifyPasswordHook = () =>{

    const dispatch  = useDispatch()
    const navigate = useNavigate()

 const [code , setCode] = useState()
 const [loading , setLoading] = useState(true)

 const onChangeCode =(e)=>{
    setCode(e.target.value)
 }

 const onSubmit = async() => {
        if(code === ""){
            notify("please compleate the data" , "error")
            return; 
        }

    setLoading(true)

    await dispatch(verifyPasswords({
        resetCode:code

    }))
    setLoading(false)
 }
    const res = useSelector((state) =>state.authReducer.verifyPassord)


 useEffect(()=>{
    if(!loading) {
        if(res){
            console.log(res)
            if(res.data.status === "success"){
                notify(" Done " , "success")
                setTimeout(()=>{
                    navigate("/user/changePassord")

                },1000)
            }
            if(res.data.status === "failed"){
                notify("worng code" , "error")
            }

        }
    }

 },[loading])

 return [code , onChangeCode , onSubmit]

}
export default VerifyPasswordHook;