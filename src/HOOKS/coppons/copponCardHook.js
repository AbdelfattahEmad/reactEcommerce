import { useDispatch } from "react-redux";
import { deleteCoppon } from "../../Redux/Actions/addCopponAction";


const CopponHooks =(coppon)=>{



const dispatch = useDispatch()




    
    const handelDelete = async()=>{

       await dispatch(deleteCoppon(coppon._id))
       window.location.reload(false)

    
    
    }
    
    return {handelDelete}

}
export default CopponHooks