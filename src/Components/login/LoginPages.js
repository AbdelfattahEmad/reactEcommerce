import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import LoginHooks from '../../HOOKS/ِAUTH/loginHooks';
import Spinner from 'react-bootstrap/Spinner';

       
const LoginPage =()=> {

  const [ email , password  ,onChangeEmail ,onChangePassword,loading ,onSubmit ] = LoginHooks()

    return(
    <Container className='my-5' style={{minHeight:'670px'}} >
       
    <Form>
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

      <Button className='mx-2' onClick={onSubmit} variant="primary" type="submit">
        Submit
      </Button>

      <label className='mx-auto my-4'>
      You do not have an account? {""}
      <Link to="/Register" style={{textDecoration:'none'}}>
      <span style={{cursor:"pointer" }} className="text-danger">
        click here
      </span>
      </Link>
      </label>

    </Form>
    {
      loading ? (loading === true ? (<Spinner animation="border"/>):null) : null 
    }
    </Container>
  );
}

  
export default LoginPage ;