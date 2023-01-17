import { Button, Container } from "react-bootstrap";
import '../../App.css';
import { Link } from "react-router-dom";


function SubTitle( {title , btn, pathText }){
    return (
        <Container>

            <div className="sale-more">
                <div className="sales">{title}</div>
                <Link to={`${pathText}`} style={{textDecoration:'none'}}>
                <Button variant="outline-dark">{btn}</Button>

                </Link>


            </div>  


        </Container>
)
}
export default SubTitle ;