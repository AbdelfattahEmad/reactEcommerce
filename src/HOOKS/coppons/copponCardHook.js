import { useDispatch } from "react-redux";
import { deleteCoppon } from "../../Redux/Actions/addCopponAction";
import { useState } from "react";


const CopponHooks =(coppon)=>{
const dispatch = useDispatch()

const dateString = coppon.expire;
const formDate = (dateString) =>{
    const options = {year : "nume" , mounth: "nume" , day : "nume"}
    return new Date(dateString).toLocaleDateString(undefined , options)
} 

    const [show , setShow]=useState()
    const handelClose= ()=>setShow(false)
    const handelShow= ()=>setShow(true)
    
    const handelDelete =async()=>{
       await dispatch(deleteCoppon(coppon._id))
    
        setShow(false)
        window.location.reload()
    
    
    }
    
    return{ dateString ,formDate , show ,handelClose ,handelShow ,handelDelete}

}
export default CopponHooks