import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllProduct } from "../../Redux/Actions/productAction"

const ViewProductsHook = () =>{

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllProduct())
    },[])


    const AllProduct = useSelector((state)=> state.ProductReducer.getAllProducts) 
    console.log(AllProduct)


    let Data =[] 
    if(AllProduct){
        Data = AllProduct.slice(0,4)
    }else{
        Data = []
    }

    return [Data]


}
export default ViewProductsHook