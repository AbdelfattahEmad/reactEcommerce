import Form from 'react-bootstrap/Form';
import empty from "../images/empty.png"
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import getCategoryAction from "../../Redux/Actions/CategoryAction"

const AddSubClass=()=>{
  
  const dispatch = useDispatch()

  
      useEffect(()=>{
          dispatch(getCategoryAction());
      },[])

      const category = useSelector(state => state.AllCategory.category)
      console.log(category)

  

    return(

<div className="">
    <img src={empty} />
    <div>
    <Form.Control
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        placeholder='Product Name'
        className='my-4'
      />
          <Form.Control
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        placeholder='Add Descreption for Product'
        className='my-4'
      />

<Form.Control
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        placeholder='price before discount'
        className='my-4'
      />

<Form.Control
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        placeholder=' price after discount'
        className='my-4'
      />


<Form.Select  className='my-3'>
<option>Add a Brand</option>
        <option>First Brand</option>
        <option>second Brand</option>
        <option>third Brand</option>
        <option>Fourth Brand </option>
      </Form.Select>

      <Form.Select  className='my-3'>
      <option>ِAdd rating</option>
        <option>First rating</option>
        <option>second rating</option>
        <option>third rating</option>
        <option>Fourth rating </option>

      </Form.Select>


    </div>

  <Button variant="primary">Enter</Button>{' '}


</div>

    )

}
export default  AddSubClass;