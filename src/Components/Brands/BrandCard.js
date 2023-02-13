import { Col } from "react-bootstrap";

function BrandCard({img ,desc}){
    return(
        
        <Col xs="6"
        sm="6"
        md="4"
        lg="2"
         className=" my-4 d-flex justify-content-around">
            <div className="">
                <img className="img-brand" src={img}/>
                <p className="p-brand">{desc}</p>
            </div>
        </Col>

    )
}
export default BrandCard;