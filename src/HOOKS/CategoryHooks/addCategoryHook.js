import { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {createCategory} from '../../Redux/Actions/CategoryAction'
import  notify  from './UseNotifiction';
import empty from "../../Components/images/empty.png"



const AddCategoryHook=()=>{

    const dispatch = useDispatch()
 
    const [ img , setImg] = useState(empty)
    const [name, setName] = useState("");
    const [btnDisable,setBtnDisable] = useState(true);

    const [SelectedFile, setSelectedFile] = useState(null)
    const [loading, setLoading] = useState(true)
    const [isPress, setIsPress] = useState(false)

    // to change name

     const onChangeName=(event)=>{
        event.persist()
         setName(event.target.value)
        }
  // when add  image save it  
    const onImageChange = (event) =>{
      if(event.target.files && event.target.files[0]) {
          setImg(URL.createObjectURL(event.target.files[0]))
          setSelectedFile(event.target.files[0])
      }
  
    }
  
    const res = useSelector(state => state.AllCategory.category)
  
    
    //save data
    const handleSubmit = async(event) => {
      event.preventDefault();

      if (name === "" || SelectedFile === null){
         notify("Please complete the data" , "warn")
      } else {

      setBtnDisable(false);

      const formData = new FormData() ;
      formData.append("name" ,name )
      formData.append("image" ,SelectedFile)
      
      setLoading(true)
      setIsPress(true)
      await dispatch(createCategory(formData))
    
      setLoading(false)
      
      } 
  
    }

    useEffect(()=>{
        if(loading === false){
          setImg(empty)
          setName("")
          setSelectedFile()
          console.log( "finshed")
          setLoading(true)
          setTimeout(()=>{
            setIsPress(false)
            if(res.status === 201) {
              notify("Added successfully" ,"success");
              setImg(empty);
              setName("");
              setBtnDisable(true);
            }else{
              notify("Add failed" ,"error");
              setName("");
              setImg(empty);
              setBtnDisable(true);
            }
          },2000)
        }
      },[loading])
      
    return [handleSubmit,onImageChange, img,name,SelectedFile,loading,isPress ,onChangeName,btnDisable]

};
export default AddCategoryHook