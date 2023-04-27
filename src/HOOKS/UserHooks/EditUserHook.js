import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import notify from '../CategoryHooks/UseNotifiction';
import { useNavigate } from "react-router-dom";
import { editAdress} from "../../Redux/Actions/UserAdressAction";


const EditUserHooks =(id)=> {


    const  navigat = useNavigate()
    const dispatch = useDispatch()

    const [EditName ,setEditName] = useState("")
    const [EditAdress,setEditAdress] = useState("")
    const [EditPhone ,setEditPhone] = useState("")
    const [loading ,setLoading] = useState(true)
    const [loadingData ,setLoadingData] = useState(true)


    const getOneAdress = useSelector((state)=> state.UserAdressReducer.getOneAdress)


    const EDitAdress = useSelector((state)=> state.UserAdressReducer.EditAdress)

    


    useEffect(()=>{
        const get = async()=>{
            setLoadingData(true)

            await dispatch(getOneAdress(id))

            setLoadingData(false)
        }
        get();
    },[])


    useEffect(()=>{
        if(!loadingData){
            if(getOneAdress &&  getOneAdress.status === "success"){
                setEditName(getOneAdress.data.alias)
                setEditAdress(getOneAdress.data.details)
                setEditPhone(getOneAdress.data.phone)
            }
        }
    },[loading])





    const onChangeName =(event)=>{
        event.persist()
        setEditName(event.target.value)
    }
    const onChangeData =(event)=>{
        event.persist()
        setEditAdress(event.target.value)  
    }


    const onChangeValue =(event)=>{
        event.persist()
        setEditPhone(event.target.value)
    }

    
    const onSubmit = async()=>{
        if(EditName === "" || EditAdress === "" || EditPhone <= 0 ){
            notify("please compleate the data " , "warn")
            return;
        }else{
        }
        setLoading(true)
        await dispatch(editAdress(id,{
            alias: EditName ,
            details :EditAdress ,
            phone : EditPhone ,
        
        }))
        setLoading(false)
    }


    useEffect(()=>{
        if(loadingData === false){
            if (EDitAdress && EDitAdress.status === 200){

                notify("The code has been update successfully" , "success")

                setTimeout(()=>{
                    navigat("/admin/personal")
                },1000)

            
            }else{
                notify("update failed" , "error")
            }
        }
    },[loadingData])






return {EditName ,onChangeName  ,EditAdress,onChangeData ,EditPhone,onChangeValue , onSubmit}

}
export default EditUserHooks