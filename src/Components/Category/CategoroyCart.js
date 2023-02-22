import { useEffect } from "react";
import { Col } from "react-bootstrap";

function CategoryCart({img,title}){

    useEffect(()=>{
        console.log( img , title)
    },[])
    return (
        <Col xs="6"
        sm="6"
        md="4"
        lg="2"
         className=" my-4 d-flex justify-content-around">
            <div className="">
                <img className="img-category" src={img}/>
                <p>{title}</p>
             
            </div>
        </Col>

    )
} 
export default  CategoryCart ;