 
 import { useEffect, useState } from 'react';
 import { useDispatch, useSelector } from 'react-redux';
 import getCategoryAction from '../../Redux/Actions/CategoryAction'
 import notify from '../../HOOKS/CategoryHooks/UseNotifiction';

 
const  AddProductHook = () => { 
    const dispatch = useDispatch()
    const category = useSelector(state => state.AllCategory.category)
    const Products = useSelector(state => state.AllProducts.product)


    useEffect(()=>{
        dispatch(getCategoryAction());
    },[])

    //state
    const [images, setImages] = useState({})
    const [proName, setproName] = useState("")
    const [proDescreption, setProDescreption] = useState("")
    const [priceBefore, setPriceBefore] = useState("")
    const [priceAfter, setPriceAfter] = useState("")
    const [rating, setRating] = useState()
    const [quant, setQuant] = useState()
    const [loading, setLoading] = useState(true)



 // OnChange
      const onChangeDescrep = (event) =>{
            event.persist();
            setProDescreption(event.target.value)
        }


        const onChangeProName = (event) =>{
            event.persist();
            setproName(event.target.value)
        }

        const onChangePricePefore = (event) =>{
            event.persist();
            priceBefore(event.target.value)
        }
        const onChangePricAfter = (event) =>{
            event.persist();
            priceAfter(event.target.value)
        }

        const onChangeQuantati = (event) =>{
            event.persist();
            setQuant (event.target.value)
        }



  
 
    // to save data
    const handelSubmit = (event) =>{
        event.preventDefault()
        if(proName === "" ||proDescreption===""||images.length <=0 ||priceBefore<=0||priceBefore<=0|priceAfter===""||rating===""||quant==="")
        {
            notify(" please compleate  the data ","warn")

        }

    }
    useEffect(()=>{
        if(loading === false){
            setImages([])
            setproName("")
            setProDescreption("")
            setPriceBefore("")
            setPriceAfter("")
            setRating("")
            setQuant("")

            setTimeout(() => setLoading(true) ,1500)

            if(Products){
                if(Products.status === 201){
                    notify(" Done","success")
                }else{
                    notify("Error !!","error")


                }
            }
            
        }

    },[loading])



    return [onChangeDescrep,onChangeProName ,onChangePricePefore,onChangePricAfter,onChangeQuantati,loading,
        Products ,images,setImages,proName ,setproName,proDescreption,setProDescreption,priceAfter,setPriceAfter,
        priceBefore,setPriceBefore,quant,setQuant ,rating,setRating,category,handelSubmit ] 
}
export default AddProductHook