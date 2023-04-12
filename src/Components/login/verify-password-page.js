import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ToastContainer} from 'react-toastify';
import VerifyPasswordHook from '../../HOOKS/ِAUTH/verifyPassswordHook';

       
const veriefyPassword =()=> {

  const [code ,onChangeCode,onSubmit] = VerifyPasswordHook()

    return(
    <Container className='my-5' style={{minHeight:'670px'}} >
       
    <Form>
      <Form.Group className="mb-3" >
        <Form.Label> enter the Code </Form.Label>
        <Form.Control type="email" value={code} onChange={onChangeCode}  placeholder="The Code" />
      </Form.Group>


      <Button className='mx-2' onClick={onSubmit} variant="primary" >
       send code
      </Button>
    </Form>

    <ToastContainer/>

    </Container>
  );
}

  
export default veriefyPassword ;