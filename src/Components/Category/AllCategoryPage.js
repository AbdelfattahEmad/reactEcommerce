import { Container} from "react-bootstrap";
import PaginationPage from "../Pagination/Paginations";
import CategoryContainer from "../Category/CategorysContainer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import getCategoryAction from "../../Redux/Actions/CategoryAction"; 


const AllCategory=()=>{
    const dispatch = useDispatch()

const category = useSelector(state => state.AllCategory.category)

    useEffect(()=>{
        dispatch(getCategoryAction());
    },[])

    return(
        <Container>
           <CategoryContainer title="All Category"/>
           <PaginationPage/>
        </Container>

    )

}
export default AllCategory ;