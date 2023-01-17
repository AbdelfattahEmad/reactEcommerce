import { Button, Container } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';

const PayMethod =()=>{
    return(
        <Container>
            <div className='Cart-logo'>
            Choose the payment method
            </div>
            <div className='radio-point'>
         <InputGroup  className='my-4'>
        <InputGroup.Radio   aria-label="Radio button for following text input"/>
        <div className='mx-2'> Payment by credit card</div>
      </InputGroup>
      <InputGroup  className='my-4'  >
        <InputGroup.Radio   aria-label="Radio button for following text input"/>
        <div className='mx-2'>Payement when recieving</div>
      </InputGroup>
            </div>

        <div >
            <p className='my-4'>total:125$</p>
            <Button variant="dark">Confirm</Button>

      </div>

            



        </Container>
  );
}


export default PayMethod 