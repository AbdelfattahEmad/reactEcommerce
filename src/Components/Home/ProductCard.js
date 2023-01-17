import Card from 'react-bootstrap/Card';
import { Container,Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';



function ProductCard( {title , img , desc , price}){
  return (

<Container className='my-4'>
<Row>
<Card style={{ width: '18rem' }}>
  <Link to="/products/:id" style={{textDecoration:"none"}}>
      <Card.Img variant="top" src={img} />
      </Link>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
            {desc}
        </Card.Text>
        <p>{price}</p>
      </Card.Body>
    </Card>


</Row>


    </Container>
  );
}
export default ProductCard;
