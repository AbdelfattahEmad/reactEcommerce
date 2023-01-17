import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import RatePost from './RatePost';
import PaginationPage from '../Pagination/Paginations';

const RatesContainer=()=>{
    return(
        <div>
        <div className="Rate-comment my-2">
            <h4 className='my-4'>Ratings</h4>
            <div  className='mx-2'>
        <Form.Label htmlFor="inputPassword5">Write Comment</Form.Label>
        <Form.Control
       
        id="inputPassword5"
        
         />
         <Form.Text id="passwordHelpBlock" muted>
        </Form.Text>
        <Button className='my-2' variant="dark">send</Button>
            </div>
            <div class="">
                <p>Mohamed:<span className='Desc-products'>10/10</span></p>
            </div>
            <div>
                <RatePost/>
            </div>
   
        </div>
        
            <PaginationPage/>
            
        </div>


    )
}
export default RatesContainer