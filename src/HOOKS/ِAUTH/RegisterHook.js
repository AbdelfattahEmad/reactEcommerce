import  {useEffect, useState} from "react";
import notify from "../CategoryHooks/UseNotifiction";
import { useDispatch, useSelector } from "react-redux";
import { createNewUser } from "../../Redux/Actions/authAction";
import { useNavigate } from "react-router-dom";

const RegisterHook =()=>{
    const dispatch = useDispatch()
    const userData = useSelector((state) =>state.authReducer.createUser)

    const navigate = useNavigate()

    const [name ,setName] = useState("")  
    const [email,setEmail] = useState("")  
    const [phone,setPhone] = useState("")  
    const [password,setPassword] = useState("")  
    const [confirm,setConfirm] = useState("")  
    const [loading,setLoading] = useState(true)


    
    const onChangeName =(e)=>{
        setName(e.target.value)
    }

    const onChangeEmail =(e)=>{
        setEmail(e.target.value)
    }


    const onChangePhone =(e)=>{
        setPhone(e.target.value)
    }

    const onChangePassword =(e)=>{
        setPassword(e.target.value)
    }
    
    const onChangeConfirm =(e)=>{
        setConfirm(e.target.value)
    }


    const validationValue = () => {
        if(name === ""){
            notify("please complete the data " , "error")
            return;
        }
        if(phone.length <= 10){
            notify(" please compleate 11 number" , "error")
            return;
        }
        if(password.length >=  6){
            notify(" please enter right numbers " , "error")
            return;
        }
        if(password != confirm){
            notify("The password is incorrect " , "error")
            return;
        }





    }


    //save Data 
    const  OnSubmit = async () => {
        validationValue()
        setLoading(true)
       await dispatch(createNewUser({
            name,
            email,
            password,
            passwordConfirm:confirm,
            phone
        
        }))
        setLoading(false)
        setTimeout(()=>{
            navigate('/login')
        },2000);


    }

    useEffect(()=>{
        if(loading === false){
            if(userData){
                if(userData.data.token){
                    localStorage.setItem("token" , userData.data.token)
                    notify("Done","sucsses")
                    setName("")
                    setLoading(true)

                }
                if(userData.data.errors){
                    if(userData.data.error[0].msg === "E-mail already in use"){
                        notify(" this account already here","error")


                    }
                }
                if(userData.data.errors){
                    if(userData.data.error[0].msg === "acccept only egypt phone numbers"){
                        notify(" this account already here","error")


                    }
                }
                if(userData.data.errors){
                    if(userData.data.error[0].msg === "must be at least 6 chars"){
                        notify(" this account already here","error")


                    }
                }


            }

        }

    },[loading])





return [name,email,phone,password,confirm,loading,onChangeName,onChangeEmail,onChangePhone,onChangePassword,onChangeConfirm ,OnSubmit ]


}

export default RegisterHook;