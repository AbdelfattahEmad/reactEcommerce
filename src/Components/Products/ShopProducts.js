import { Container} from "react-bootstrap";
import DropDown from "../Home/DropDown";
import HeaderCategory from "../Home/HeaderCategory";
import CategoryContainer from "../ContainerPages/CategorysContainer";
import PaginationPage from "../Pagination/Paginations";


const ShopProducts=()=>{
    return(
    <div style={{minHeight:"670px"}}>
         <HeaderCategory/>
         <Container>
                <DropDown/>
                <CategoryContainer title=""/>
                <PaginationPage/>
         </Container>
    </div>
     )
}
export default ShopProducts;