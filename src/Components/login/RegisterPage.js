import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import RegisterHook from '../../HOOKS/ِAUTH/RegisterHook.js';
import { ToastContainer} from 'react-toastify';


 const RegisterPage = () => {

  const [name,email,phone,password,confirm,,onChangeName,onChangeEmail,onChangePhone,onChangePassword,onChangeConfirm ,OnSubmit] =RegisterHook()


    return(
        <Container className='my-5 text-center w-50'style={{minHeight:'670px'}} >
        <Form>

          <Form.Group className="mb-3" >
            <Form.Label></Form.Label>
            <Form.Control
             type="name"
            placeholder="User Name" 
            value={name}
            onChange={onChangeName}

            />
          </Form.Group>

    
          <Form.Group className="mb-3" >
            <Form.Label></Form.Label>
            <Form.Control
             type="email"
              placeholder="Email"
              value={email}
              onChange={onChangeEmail }
  
              />
          </Form.Group>



          <Form.Group className="mb-3" >

            <Form.Control
             type="text"
              placeholder="phone number"
              value={phone}
              onChange={onChangePhone}
  
              />
          </Form.Group>











          <Form.Group className="mb-3" >
            <Form.Label></Form.Label>
            <Form.Control type="password" placeholder="Password" 
                        value={password }
                        onChange={onChangePassword}
            
            />
          </Form.Group>


          <Form.Group className="mb-3" >
            <Form.Label></Form.Label>
            <Form.Control type="password" placeholder="password confirmation"
                        value={confirm}
                        onChange={onChangeConfirm }
            />
          </Form.Group>


          <div className='d-flex align-items-center p-3'>
          <Button  onClick={OnSubmit} className='mx-2 p-2' variant="primary" type="submit">
            Submit
          </Button>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          </div>


          <div>
          <label className='mx-auto my-4'>
          Already have an account? {""}
          <Link to="/login" style={{textDecoration:'none'}}>
          <span style={{cursor:"pointer" }} className="text-danger">
            click here
          </span>
          </Link>
          </label>

          </div>




          <div>
            <Link to="/admin" style={{textDecoration:'none'}}>
          <span style={{cursor:"pointer" }} className="text-danger mx-4">
             Admin account 
          </span>
          </Link>

            </div>

        </Form>
        <ToastContainer/>
        </Container>

      )
}

export default RegisterPage;