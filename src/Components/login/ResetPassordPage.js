import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ToastContainer} from 'react-toastify';
import ResetPasswordHook from '../../HOOKS/ِAUTH/ResetPassordHook';

       
const ResetPassword =()=> {

  const [password,confirmPassword,onChangepassword , onChangeConfirmPassword, onSubmit] = ResetPasswordHook()

    return(
    <Container className='my-5' style={{minHeight:'670px'}} >
       
    <Form>
      <Form.Group className="mb-3" >
        <Form.Label> Enter The new Password </Form.Label>
        <Form.Control type="passord" value={password} onChange={onChangepassword}  placeholder="new password" />
        <Form.Control type="passord" value={confirmPassword} onChange={onChangeConfirmPassword}  placeholder="password confirmation" />

      </Form.Group>


      <Button className='mx-2' onClick={onSubmit} variant="primary" >
       Confirm
      </Button>

    </Form>

      <ToastContainer/>

    </Container>
  );
}

  
export default ResetPassword ;