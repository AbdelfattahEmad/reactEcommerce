import { Container } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import DeleteAdressHooks from "../../HOOKS/UserHooks/DeleteAdressHook";




const ViewAdressCart =({item})=>{

    const {handelDelete} = DeleteAdressHooks(item._id)


    return(
       
        <div className="py-2 edit">


            <Container>

                <div className="delete">
                <div className=" py-4">
                    <h4 className="py-2">adress: <span>{item.alias}</span></h4>
                    <p className="py-2"> Detailed address :<span>{item.details}</span> </p>
                    <p className="py-2">phone number: <span>{item.phone}</span></p>
                </div>
                <div>


                <Link to={`/admin/editcopon/`} style={{textDecoration : "none"}}>
                <div  className="px-4">
                    <div className="py-4"><Button variant="dark">Edit</Button></div>
                </div>
                </Link>

                <div className="px-4" >
                <Button onClick={handelDelete} variant="dark" >Delete</Button>
                </div>

                </div>

                </div>
            </Container>
        </div>
    )





}
export default ViewAdressCart