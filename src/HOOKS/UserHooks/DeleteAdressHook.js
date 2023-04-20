import { useDispatch } from "react-redux";
import { DeleteAdress } from "../../Redux/Actions/UserAdressAction";


const DeleteAdressHooks = (id) => {




const dispatch = useDispatch()

    const handelDelete = async()=>{

       await dispatch(DeleteAdress(id))
       window.location.reload(false)
    }
    return {handelDelete}

}
export default DeleteAdressHooks