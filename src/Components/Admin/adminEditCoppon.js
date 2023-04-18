import Form from 'react-bootstrap/Form';
import { Button} from 'react-bootstrap';
import { ToastContainer} from 'react-toastify';
import { useEffect, useRef } from 'react';
import EditCoponHooks from '../../HOOKS/coppons/editCoppon-hook';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getOneCoppon } from '../../Redux/Actions/addCopponAction';


const AdminEditCoppon =()=>{
  
  const dispatch = useDispatch()

  const {id} = useParams()
  const dateRef = useRef()


    const {coponName ,onChangeName  ,coponData,onChangeData ,coponValue ,onChangeValue , onSubmit}= EditCoponHooks(id)



    return(

<div className="">
    <div> <h1 className=''>Edit coppon</h1></div>
   
    <div>
    <Form.Control 
         className='my-3'
            type="text"
        placeholder='edit copoon'
        onChange={onChangeName }
        value={coponName}
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


    <Button  variant="primary" onClick={onSubmit}>save Edit</Button>{' '}

    </div>

        <ToastContainer />

</div>


)
}
export default AdminEditCoppon ;