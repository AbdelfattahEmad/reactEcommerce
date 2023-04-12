import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllProductSearch } from "../../Redux/Actions/productAction"

const ViewSearchProductsHook = () =>{

    let limit = 6
    const dispatch = useDispatch()

    const getProduct = async()=>{

        let word = "" ; 
        if(localStorage.getItem("searchWord") != null)
       word = localStorage.getItem("searchWord")

        await dispatch( getAllProductSearch(`limit=${limit}&keyword=${word}`))
    }

    useEffect(()=>{
        getProduct('')
    },[])

    const AllProduct = useSelector((state)=> state.AllProducts.allProducts) 

    let items = [] ;  let results = 0 ;
    try{
        if(AllProduct.data){
            items = AllProduct.data
        }else{
            items = []
        }
    }catch(e){}

    try{
        if(AllProduct.results){
            results = AllProduct.results

        }else{
            results = 0
        }

    }catch(e){}










    return [AllProduct ,getProduct , results]
}
export default ViewSearchProductsHook 