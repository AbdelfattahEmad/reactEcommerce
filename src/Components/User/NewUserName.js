
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import aboda from "../images/aboda.jpg"
const NewUserName=()=>{
    return(
        <div>   
            <div>
                <img className="img-aboda" src={aboda}/>
            </div>

            <div className=" py-4">
                    <h1>Name :<span>Abdelfatah Emad </span></h1>
                    <p>phone number:<span> 010636502314</span> </p>
                    <p>adress:<span>shebin Elkom Monfia</span></p>
            </div>
            <div>
            <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Change password</Form.Label>
        <Form.Control type="password" placeholder="Enter the old password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="ُEnter New Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <Button variant="primary" type="submit">
      Save changes
      </Button>
    </Form>


            </div>


        </div>
    )

}
export default  NewUserName;