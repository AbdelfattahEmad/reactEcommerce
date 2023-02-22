import { Container} from "react-bootstrap";
import BrandContainer from "../Brands/BrandContainer";
import PaginationPage from "../Pagination/Paginations";

const AllBrands=()=>{
    return(
        <Container>
            <div className="my-3">All Brands</div>
            
           <BrandContainer/>
           <PaginationPage/>
        </Container>

    )
}
export default AllBrands