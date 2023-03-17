import  {useState} from "react";
import { useDispatch, useSelector} from "react-redux";
import { loginAction } from "../../Redux/Actions/authAction";
import { useEffect } from "react";


const LoginHooks =() =>{



    const dispatch = useDispatch()


    const [name ,setName] = useState("")  
    const [email,setEmail] = useState("")  
    const [password,setPassword] = useState("")
    const [loading,setLoading] = useState(true)

    
    
    const onChangeName =(e)=>{
        setName(e.target.value)
    }
    const onChangeEmail =(e)=>{
    setEmail(e.target.value)
  }
  const onChangePassword =(e)=>{
    setPassword(e.target.value)
}


const onSubmit = async() => {
    await dispatch(loginAction(
    {
      email,
      password
    }))
}

//const loginData = useSelector((state) =>state.authReducer.login)



useEffect(()=> {

  // if(loading === false){

  //   if(loginData){

  //     if(loginData.data.token){

  //     //  localStorage.setItem("token" ,loginData.data.token)

  //     }else{

  //     //  localStorage.removeItem("token")

  //     }

  //     setLoading(true);
  //   }
  // }
},[loading])



return [ email,password,onChangeEmail,onChangePassword,loading ,onSubmit]

}
export default LoginHooks