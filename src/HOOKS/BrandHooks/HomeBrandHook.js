import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getAllBrand from "../../Redux/Actions/BrandAction";

const HomeBrandHook=()=>{

    
    const dispatch = useDispatch()

    
    useEffect(()=> {
        dispatch(getAllBrand())
    },[])
    //get brand from redux
    const brand = useSelector(state=>state.AllBrand.brand)

    //get loadingfrom redux
    const loading = useSelector(state=>state.AllBrand.loading)

    return [ brand , loading]



}
export default HomeBrandHook;