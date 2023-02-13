import { Container} from "react-bootstrap";
import BrandContainer from "../Brands/BrandContainer";
import PaginationPage from "../Pagination/Paginations";

const AllBrands=()=>{
    return(
        <Container>
           <BrandContainer/>
           <PaginationPage/>
        </Container>

    )
}
export default AllBrands