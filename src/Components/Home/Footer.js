import { Container } from "react-bootstrap"

function Footer({img}){
    return(

        <Container className="d-flex">
            <div className=""> 
                <img className="foot-h" src={img}/>
            </div>
        </Container>
    )
}
   



export default Footer
  