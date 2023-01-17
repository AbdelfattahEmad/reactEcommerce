import { Container } from "react-bootstrap"

const AddPersonalData=()=>{
    return(
       
        <div>
            <Container>
                    <h1>Hello Mohamed</h1>
                <div className=" py-4">
                    <h1>Name : <span>Mohamed Eldali</span></h1>
                    <p>phone number: <span> 010636502314</span> </p>
                    <p>adress:<span> shebin Elkom Monfia</span></p>
                    <p>number of products:<span>5 </span></p>
                    <p> payment method: <span> credit card</span></p>

                </div>
            </Container>
        </div>
    )

}
export default AddPersonalData