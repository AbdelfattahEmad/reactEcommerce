import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import notify from '../CategoryHooks/UseNotifiction';
import { addCoppon, editCoppon, getOneCoppon } from "../../Redux/Actions/addCopponAction";
import { useNavigate } from "react-router-dom";


const EditCoponHooks =(id)=> {


    const  navigat = useNavigate()
    const dispatch = useDispatch()

    const [coponName ,setCoponName] = useState('')
    const [coponData ,setCoponData] = useState('')
    const [coponValue ,setCoponValue] = useState("")
    const [loading ,setLoading] = useState(true)
    const [loadingData ,setLoadingData] = useState(true)

    const OneCopon = useSelector((state)=> state.CopponReducer.getOneCoppon)

    if(OneCopon){
        console.log(OneCopon.data.name)
    }



    useEffect(()=>{
        const get = async()=>{
            setLoadingData(true)
            await dispatch(getOneCoppon(id))
            setLoadingData(false)

        }
        get();
    },[])


    useEffect(()=>{
        if(!loadingData ){
            if(OneCopon.data){
                setCoponName(OneCopon.data.name)
                setCoponData(OneCopon.data.expire)
                setCoponValue(OneCopon.data.discount)
            }
        }

    },[loadingData])





    const onChangeName =(event)=>{
        event.persist()
        setCoponName(event.target.value)

    }

    const onChangeData =(event)=>{
        event.persist()
        setCoponData(event.target.value)

        
    }


    const onChangeValue =(event)=>{
        event.persist()
        setCoponValue(event.target.value)
    }

    const onSubmit = async()=>{

        if(coponName === "" || coponData === "" || coponValue <= 0 ){

            notify("please compleate the data " , "warn")
            return;
        }else {

        }






        setLoading(true)
        await dispatch(editCoppon(id,{
            name: coponName,
            expire: coponData ,
            discount: coponValue

           }))
        setLoading(false)
    }

    const CoponRes = useSelector((state)=> state.CopponReducer.EditCoppon)

    useEffect(()=>{
        if(loading === false){
            if (CoponRes && CoponRes.status === 200){
                notify("The code has been update successfully" , "success")

                setTimeout(()=>{
                    navigat("/Sp/cuppon")
                },1000)

            
            }else{
                notify("update failed" , "error")
            }
        }

    },[loading])











    return {coponName ,onChangeName  ,coponData,onChangeData ,coponValue ,onChangeValue , onSubmit }




    



}

export default EditCoponHooks