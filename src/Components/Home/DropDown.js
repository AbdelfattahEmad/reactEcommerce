import { Container } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import ViewSearchProductsHook from '../../HOOKS/productHooks/viewSearchHook';

const DropDown =()=>{

  const [AllProduct] = ViewSearchProductsHook()


    return(

    <Container>
  <div className="sale-more my-2">
    <div className="sales">search result</div>
    <div className="">
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
       Sort By
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Best seller</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Highest Rated</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Highest price</Dropdown.Item>
        <Dropdown.Item href="#/action-3">lowest price</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    </div>
    </div>
   </Container>
    )
}
export default DropDown;