import { Container } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";



const AddPersonalData=()=>{

    return(
       
        <div>
            <Container>

            <h1>Hello Mohamed</h1>

                <div className="d-flex align-content-between">
                <div className=" py-4">
                    <h1>Name : <span>Mohamed Eldali</span></h1>
                    <p>phone number: <span> 010636502314</span> </p>
                    <p>adress:<span> shebin Elkom Monfia</span></p>
                    <p>number of products:<span>5 </span></p>
                    <p> payment method: <span> credit card</span></p>
                </div>

                <div className="px-5">
                    <div className="py-3"><Button variant="dark">edit</Button></div>
                    <div> <Button variant="dark">delete</Button></div>
                </div>
                </div>


                
                <Link to={`/admin/addUser`} style={{textDecoration : "none"}}>
                <div  className="px-4">
                    <div className="py-4"><Button variant="dark">Add New aderss</Button></div>
                </div>
                </Link>
                
                
            </Container>
        </div>
    )

}
export default AddPersonalData