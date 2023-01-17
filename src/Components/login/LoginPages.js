import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
       
function LoginPage(){
    return(
    <Container className='my-5' style={{minHeight:'670px'}} >
       
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User name</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button className='mx-2' variant="primary" type="submit">
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
    </Container>
  );
}

  
export default LoginPage ;