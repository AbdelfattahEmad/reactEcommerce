import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllProduct } from "../../Redux/Actions/productAction"

const ViewProductsHook = () =>{

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllProduct())
    },[])

    const AllProduct = useSelector((state)=> state.AllProducts.allProducts) 
    console.log( AllProduct)


     

    

    return [AllProduct]


}
export default ViewProductsHook