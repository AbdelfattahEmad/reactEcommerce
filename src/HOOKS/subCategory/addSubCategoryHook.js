
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import notify from '../../HOOKS/CategoryHooks/UseNotifiction';
import { SubCategoryAction } from '../../Redux/Actions/AddSubCategoryAction';
import getCategoryAction from "../../Redux/Actions/CategoryAction"



 const AddSubCategoryHook = () => {
  
    const dispatch = useDispatch() 

    useEffect(()=>{
        dispatch(getCategoryAction());
    },[])

    const [id , setId] = useState("0")
    const [name , setName] = useState('')
    const [loading, setloading] = useState(true)



    const category = useSelector(state => state.AllCategory)

    const subCategory = useSelector(state => state.subCategory)

    console.log( category , subCategory)


    const handelChange=(e)=>{
      setId(e.target.value)
    }

    const onChangeName =(e)=> {
        e.presist();
        setId(e.target.value)

    }

    const handelSubmit = async(e)=>{
      e.preventDefault()

      if (id=== "0"){
        notify("Please choose a rating","warn")
        return ;
      }
      if(name === ""){
        notify("Please complete the data","warn")
        return;
      }

      setloading(true)
      await dispatch(SubCategoryAction({
        name,
        category:id
     
      }))
      setloading(false)
    }

      useEffect(()=>{
        if(loading === false){
          setName("")
          setId("0")
          if(subCategory){
            console.log(subCategory)
          } 
          if(subCategory.state === 201) {
            notify("done","success")
          } else{
            notify(" errrrrrroooooor","warn")


          }
        }

      },[])

      return [id,name,loading,category,subCategory,handelChange,handelSubmit,onChangeName]




}
export default AddSubCategoryHook 
