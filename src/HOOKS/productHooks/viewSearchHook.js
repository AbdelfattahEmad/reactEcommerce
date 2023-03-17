import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllProduct } from "../../Redux/Actions/productAction"

const ViewSearchProductsHook = () =>{
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllProduct())
    },[])

    const AllProduct = useSelector((state)=> state.AllProducts.allProducts) 

    return [AllProduct]
}
export default ViewSearchProductsHook 