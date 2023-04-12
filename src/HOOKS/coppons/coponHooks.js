import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import notify from '../CategoryHooks/UseNotifiction';
import { addCoppon, getAllCoppon } from "../../Redux/Actions/addCopponAction";


const CoponHooks =()=> {

    const dispatch = useDispatch()

    const [coponName ,setCoponName] = useState('')
    const [coponData ,setCoponData] = useState('')
    const [coponValue ,setCoponValue] = useState(0)
    const [loading ,setLoading] = useState(true)



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
        await dispatch(addCoppon({
            name: coponName,
            expire: coponData ,
            discount: coponValue
        }))
        setLoading(false)
    }

    const CoponRes = useSelector((state)=> state.CopponReducer.addCoppon)

    useEffect(()=>{
        if(loading === false){
            if (CoponRes && CoponRes.status === 201){
                notify("The code has been added successfully" , "success")

                window.location.reload(false)
            
            }else if (CoponRes && CoponRes.status === 400){
                notify("It has already been added" , "error")
            }
        }

    },[loading])


    const getCopon = useSelector((state)=> state.CopponReducer.addCoppon)


    useEffect(()=>{
        const get = async()=>{

            await dispatch(getAllCoppon())

        }
        get();
    },[])

    let coppons = [] ;

    try{
        if(getCopon && getCopon.data.length >=1){
            coppons = getCopon.data
        }
    }catch(e){}








    return {coponName ,onChangeName  ,coponData,onChangeData ,coponValue ,onChangeValue , onSubmit , coppons}




    



}

export default CoponHooks