import { Container} from "react-bootstrap";
import PaginationPage from "../Pagination/Paginations";
import CategoryContainer from "../ContainerPages/CategorysContainer";


const AllCategory=()=>{
    return(
        <Container>
           <CategoryContainer title="All Category"/>
           <PaginationPage/>
        </Container>

    )

}
export default AllCategory ;