import Form from 'react-bootstrap/Form';
import empty from "../images/empty.png"
import { Button } from 'react-bootstrap';

const AddBrand =()=>{
    return(

<div className="">

    <img src={empty} />
    <div>
    <Form.Control
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        placeholder='Add Descreption for Brand'
        className='my-4'
      />
    </div>

<Button variant="primary">Enter</Button>{' '}


</div>

    )

}
export default AddBrand ;