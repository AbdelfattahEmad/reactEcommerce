import Form from 'react-bootstrap/Form';
import { Button, Container } from 'react-bootstrap';
import { ToastContainer} from 'react-toastify';
import { useRef } from 'react';
import UserAdressHook from '../../HOOKS/UserHooks/Adress-hooks';


const AddNewPersonalData =()=>{

  const {alias,onChangeAlias ,details,onChangeDetails,phone,onChangePhone,onSubmit }=UserAdressHook()


    
    const dateRef =useRef() 


    return(
      <div className="px-5 py-5">

      <Container >    
    <div> <h1 className=''>Add new adress</h1></div> 
    <div>
    <Form.Control 
         className='my-3'
            type="text"
        placeholder="New Adress"
        value={alias}
        onChange={onChangeAlias }
      />
    </div>

    <div>
    <Form.Control 
    ref={dateRef}
         className='my-3'
        type="phone number"
        placeholder='Detailed Address'
        value={details}
        onChange={onChangeDetails}



      />
    </div>

    <div>
    <Form.Control 
         className='my-3'
        type="text"
        placeholder='discount percentage'
        value={phone}
        onChange={onChangePhone}
      />

    </div>
    <div>


    <Button  variant="primary" onClick={onSubmit} >Enter</Button>{' '}

    </div>


        <ToastContainer />

</Container>
</div>




)
}
export default AddNewPersonalData;