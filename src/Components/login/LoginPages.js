import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import LoginHooks from '../../HOOKS/ِAUTH/loginHooks';
import Spinner from 'react-bootstrap/Spinner';
import { ToastContainer} from 'react-toastify';

       
const LoginPage =()=> {

  const [ email , password  ,onChangeEmail ,onChangePassword,loading ,onSubmit,press ] = LoginHooks()

    return(
    <Container className='my-5' style={{minHeight:'670px'}} >
       
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" >
        <Form.Label>User name</Form.Label>
        <Form.Control type="email" value={email} onChange={onChangeEmail}  placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={password} onChange={onChangePassword} placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button className='mx-2' variant="primary" type="submit">
        Submit
      </Button>

<div>
<label className='mx-auto my-4'>
      You do not have an account? {""}
      <Link to="/Register" style={{textDecoration:'none'}}>
      <span style={{cursor:"pointer" }} className="text-danger">
        click here
      </span>
      </Link>
      </label>


</div>
     
      <div>
    <label className='mx-auto my-4'>
        
        <Link to="/user/forget-password" style={{textDecoration:'none'}}>
        <span style={{cursor:"pointer" }} className="text-danger">
        Did you forget your password ? {""}
    
        </span>
        </Link>
        </label>


      </div>


    </Form>

    {
      press === true ? (loading === true ? (<Spinner animation="border"/>) : null) : null 
    }
      <ToastContainer/>

    </Container>
  );
}

  
export default LoginPage ;