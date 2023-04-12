import Form from 'react-bootstrap/Form';
import { Button, useAccordionButton } from 'react-bootstrap';
import { ToastContainer} from 'react-toastify';
import CoponHooks from '../../HOOKS/coppons/coponHooks';
import { useRef } from 'react';


const AddNewPersonalData =()=>{
    const {coponName ,onChangeName  ,coponData,onChangeData ,coponValue ,onChangeValue , onSubmit ,  coppons}=CoponHooks()
    
    const dateRef =useRef() 


    return(

<div className="">
    <div> <h1 className=''>Add  new adress</h1></div>



    
            
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


        <ToastContainer />

</div>


)
}
export default AddNewPersonalData;