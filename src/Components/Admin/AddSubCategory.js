
import Form from 'react-bootstrap/Form';
import empty from "../images/empty.png"
import { Button } from 'react-bootstrap';


const AddSubCategory=()=>{
    return(
        <div>
        <img src={empty}  className='my-3'/>
        <Form.Control
         className='my-3'
        type="text"
        id="inputPassword5"
        placeholder='Descreption'
        aria-describedby="passwordHelpBlock"
      />

        <Form.Select  className='my-3'>
        <option>First rating</option>
        <option>second rating</option>
        <option>third rating</option>
        <option>Fourth rating </option>

      </Form.Select>

      <Button variant="primary">Enter</Button>{' '}

      </div>

    )

}
export default AddSubCategory