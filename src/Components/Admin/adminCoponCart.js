import { Container } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import CopponHooks from "../../HOOKS/coppons/copponCardHook";
import { Link } from "react-router-dom";




const AdminCoponCart =({coppon})=>{

    const {handelDelete} = CopponHooks(coppon)

    return(
       
        <div className="py-2 edit">


            <Container>

                <div className="delete">
                <div className=" py-4">
                    <h4 className="py-2">Name : <span>{coppon.name}</span></h4>
                    <p className="py-2">Expiry date: <span>{coppon.expire}</span> </p>
                    <p className="py-2">discount percentage: <span></span> % </p>
                </div>
                <div>


                <Link to={`/admin/editcopon/${coppon._id}`} style={{textDecoration : "none"}}>
                <div  className="px-4">
                    <div className="py-4"><Button variant="dark">Edit</Button></div>
                </div>
                </Link>

                <div className="px-4" >
                <Button variant="dark" onClick={handelDelete}>Delete</Button>
                </div>

                </div>

                </div>
            </Container>
        </div>
    )





}
export default AdminCoponCart