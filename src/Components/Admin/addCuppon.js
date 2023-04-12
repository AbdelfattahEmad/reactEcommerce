import Form from 'react-bootstrap/Form';
import { Button, Col, Row } from 'react-bootstrap';
import { ToastContainer} from 'react-toastify';
import { useRef } from 'react';
import CoponHooks from '../../HOOKS/coppons/coponHooks';
import AdminCoponCart from './adminCoponCart';


const AddCopon =()=>{

    const {coponName ,onChangeName  ,coponData,onChangeData ,coponValue ,onChangeValue , onSubmit ,  coppons}=CoponHooks()

     const dateRef = useRef()
    return(

<div className="">
    <div> <h1 className=''>Add New Copon</h1></div>



    
            
    <div>
    <Form.Control 
         className='my-3'
            type="text"
        placeholder='ADD Copon'
        value={coponName}
        onChange={onChangeName }
      />
    </div>

    <div>
    <Form.Control 
    ref={dateRef}
         className='my-3'
        type="text"
        placeholder='Expiry date'
        value={coponData}
        onChange={onChangeData}

        onFocus={()=>dateRef.current.type = "date"}
        onBlur={()=>dateRef.current.type = "text"}


      />
    </div>

    <div>
    <Form.Control 
         className='my-3'
        type="number"
        placeholder='discount percentage'
        value={coponValue}
        onChange={onChangeValue}
      />

    </div>
    <div>


    <Button  variant="primary" onClick={onSubmit} >Enter</Button>{' '}

    </div>
      <Row>
        <Col sm="8">

          {
             coppons.data ? (coppons.data.map((item , index)=>{
              return (
                <AdminCoponCart key={index} coppon={item}/> 
              )
             }) 
             ) : <h2 className='py-2 px-2'>There is no coupon</h2>
          }
        </Col>
      </Row>


        <ToastContainer />

</div>


)
}
export default AddCopon ;