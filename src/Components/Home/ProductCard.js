import Card from 'react-bootstrap/Card';
import { Container,Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';



function ProductCard({item}){
  return (

<Container className='my-4'>
<Row>
<Card style={{ width: '18rem' }}>
  <Link to={`/products/${item._id}`} style={{textDecoration:"none"}}>
      <Card.Img variant="top" src={item.image} />
      </Link>
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
            {item.desc}
        </Card.Text>
        <p>{item.price}</p>
      </Card.Body>
    </Card>


</Row>


    </Container>
  );
}
export default ProductCard;
