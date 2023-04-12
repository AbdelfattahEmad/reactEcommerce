import { Container } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CopponHooks from "../../HOOKS/coppons/copponCardHook";
import { Link } from "react-router-dom";



const AdminCoponCart =({coppon})=>{

  
    const {dateString ,formDate , show ,handelClose ,handelShow ,handelDelete } = CopponHooks(coppon)



    return(
       
        <div className="py-2 edit">


<div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog show={show} onHide={handelClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm deletion</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Are you sure about the coupon deletion process?</p>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={handelClose} variant="secondary">Close</Button>
          <Button onClick={handelDelete} variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>

            <Container>

                <div className="delete">
                <div className=" py-4">
                    <h4 className="py-2">CoPon Name  : {coppon.name}</h4>
                    <p className="py-2">phone number: {} </p>
                    <p className="py-2">Expiry date: {coppon.expire} </p>
                    <p className="py-2">discount percentage: {coppon.discount} % </p>

                </div>

                <Link to={`/admin/editcopon/${coppon._id}`} style={{textDecoration : "none"}}>
                <div  className="px-4">
                    <div className="py-4"><Button variant="dark">Edit</Button></div>
                </div>
                </Link>

                <div onClick={handelShow} className="px-4" >
                <div><Button variant="dark">Delete</Button></div>
                </div>
                </div>
            </Container>
        </div>
    )





}
export default AdminCoponCart