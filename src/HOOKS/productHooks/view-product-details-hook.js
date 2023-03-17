import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getOneProduct  } from "../../Redux/Actions/productAction"
import {getCategoryAction } from "../../Redux/Actions/CategoryAction"

import jak from "../../Components/images/jak.webp"


const ViewProductDetailssHook = (prodID , catID) =>{

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getOneProduct(prodID))
        dispatch(getCategoryAction(catID))

    },[])

    const oneProducts = useSelector((state)=> state.AllProducts.oneProduct) 
    const oneCategory = useSelector((state)=> state.AllCategory.oneCategory) 

//to show product data 
    let item =[];
    if(oneProducts.data)
    item = oneProducts.data;
    else
    item =[];



    //to show category data 
    let cat =[];
    if(oneCategory.data)
   cat = oneCategory.data;
    else
    cat =[];






    //to view images gallary 
    let images = []
    if(item.images)
   images = item.images.map((img)=>{ return {original:img}})
 
   else{
     images=[{original:`${jak}`}]
   }
 


    return [item , images , cat]


     

    



}
export default ViewProductDetailssHook 