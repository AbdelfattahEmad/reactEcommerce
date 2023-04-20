import { Container } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import ViewAdressCart from "./viewAdressCart";
import viewAdressHooks from "../../HOOKS/UserHooks/viewAdressHook";



const AddPersonalData=()=>{


    const {getUser} = viewAdressHooks()

    return(
       
        <div>
            <Container>

            <h1> View Address book</h1>

            {
                getUser.data ? (getUser.data.map(( item , index)=>{
                    return <ViewAdressCart key={index} item={item}/>

                })) :  <h2>no adress defind</h2>
            }



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