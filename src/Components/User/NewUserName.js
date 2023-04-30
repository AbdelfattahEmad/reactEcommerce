
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import UpdateHook from '../../HOOKS/UserHooks/UpdateUserHook';

const NewUserName=()=>{
  const{user , show , handleClose , handleShow , handelSubmit , onChangeName , onChangeEmail, onChangePhone , name , email , phone } = UpdateHook()



    return(
      <Container>
        <h1>Personal data page</h1>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Data </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control value={name} onChange={onChangeName} className='my-2' type="text" placeholder="Edit Name" />
          <Form.Control value={phone} onChange={onChangePhone} className='my-2' type="phone number" placeholder="Edit Phone " />
          <Form.Control value={email} onChange={onChangeEmail} className='my-2' type="email" placeholder="Edit Email" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handelSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


            <div className='d-flex align-items-center justify-content-between '>  
            <div className=" py-4">
                    <p>Name :<span>{user.name} </span></p>
                    <p>phone number:<span> {user.phone}</span> </p>
                    <p>Email:<span>{user.email}</span></p>

            </div>

            <div>
            <Button variant="primary" onClick={handleShow}>Edit</Button>
            </div>
            

            
        </div>

        <div>
          <h4 className='py-1'>Change password</h4>
        <Form.Group className="mb-2" controlId="formBasicPassword">
        <Form.Label> </Form.Label>
        <Form.Control type="password" placeholder="Enter New Password" />
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicPassword">
        <Form.Label></Form.Label>
        <Form.Control type="password" placeholder="Confirm New Password" />
      </Form.Group>
        </div>
        <div className='py-2'><Button  variant="success">Save password</Button>{' '}</div>

        </Container>

    )



}
export default  NewUserName;