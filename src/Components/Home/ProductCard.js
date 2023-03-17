import Card from 'react-bootstrap/Card';
import { Container,Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';



function ProductCard( {title , img , desc , price , items}){
  return (

<Container className='my-4'>
<Row>
<Card style={{ width: '18rem' }}>
  <Link to={`/products/${items._id}`} style={{textDecoration:"none"}}>
      <Card.Img variant="top" src={items.image} />
      </Link>
      <Card.Body>
        <Card.Title>{items.title}</Card.Title>
        <Card.Text>
            {items.desc}
        </Card.Text>
        <p>{items.price}</p>
      </Card.Body>
    </Card>


</Row>


    </Container>
  );
}
export default ProductCard;
