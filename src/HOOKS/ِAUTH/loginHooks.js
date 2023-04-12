import  {useState} from "react";
import { useDispatch, useSelector} from "react-redux";
import { loginAction } from "../../Redux/Actions/authAction";
import { useEffect } from "react";
import notify from "../CategoryHooks/UseNotifiction";
import { useNavigate } from "react-router-dom";



const LoginHooks =() =>{

const dispatch = useDispatch()
const navigate = useNavigate()


    const [name ,setName] = useState("")  
    const [email,setEmail] = useState("")  
    const [password,setPassword] = useState("")
    const [loading,setLoading] = useState(true)
    const [press,setPress] = useState(false)


    
    
    const onChangeName =(e)=>{
        setName(e.target.value)
    }
    const onChangeEmail =(e)=>{
    setEmail(e.target.value)
  }
  const onChangePassword =(e)=>{
    setPassword(e.target.value)
}


const onSubmit = async(e) => {
  console.log(e)
  e.preventDefault()
setPress(true)
setLoading(true)

    await dispatch(loginAction(
    {
      email,
      password
    }))
    setLoading(false)
    setPress(false)
}

const loginData = useSelector((state) =>state.authReducer.user)


useEffect(()=> {

   if(loading === false){

     if(loginData){

      if(loginData.data.token){

        localStorage.setItem("token" ,loginData.data.token)
        localStorage.setItem("user" , JSON.stringify(loginData.data.data))
      
        notify("Login succeeded" , "sucsses")

        setTimeout(()=>{
          navigate("/")

        }, 2000)

      }else{

       localStorage.removeItem("token")
       localStorage.removeItem("user")



      }

      
        if(loginData.data.message === "incorect email or password"){
          localStorage.removeItem("token")
          localStorage.removeItem("user")

          notify("login failed " , "error")
  
        }
  

      

      setLoading(true);
    }
  }
},[loading])



return [ email,password,onChangeEmail,onChangePassword,loading ,onSubmit ,press ]

}
export default LoginHooks