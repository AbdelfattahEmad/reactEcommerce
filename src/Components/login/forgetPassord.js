import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ToastContainer} from 'react-toastify';
import ForgetPasswordHook from '../../HOOKS/ِAUTH/forgetPasswordHook';

       
const ForgetPassword =()=> {

  const [ email , onChangeEmail , onSubmit] = ForgetPasswordHook()

    return(
    <Container className='my-5' style={{minHeight:'670px'}} >
       
    <Form>
      <Form.Group className="mb-3" >
        <Form.Label> forget your password </Form.Label>
        <Form.Control type="email" value={email} onChange={onChangeEmail}  placeholder="Enter email or mobile phone" />
      </Form.Group>


      <Button className='mx-2' onClick={onSubmit} variant="primary" >
       send code
      </Button>

    </Form>

      <ToastContainer/>

    </Container>
  );
}

  
export default ForgetPassword ;