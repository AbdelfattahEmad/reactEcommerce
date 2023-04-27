import Form from 'react-bootstrap/Form';
import { Button} from 'react-bootstrap';
import { ToastContainer} from 'react-toastify';
import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import EditUserHooks from '../../HOOKS/UserHooks/EditUserHook';


const EditUserAdress =()=>{
  

  const {id} = useParams()
  const dateRef = useRef()


    const {EditName ,onChangeName  ,EditAdress,onChangeData ,EditPhone,onChangeValue ,onSubmit}= EditUserHooks(id)



    return(

<div className="">
    <div> <h1 className=''>Edit Adresses</h1></div>
    <div>
    <Form.Control 
         className='my-3'
            type="text"
        placeholder='edit Adress'
        onChange={onChangeName }
        value={EditName}
      />
    </div>

    <div>
    <Form.Control 
    ref={dateRef}
         className='my-3'
        type="text"
        placeholder='Adress Details'
        value={EditAdress}
        onChange={onChangeData}
      />
    </div>


    <div>
    <Form.Control 
         className='my-3'
        placeholder='phone Number'
        value={EditPhone}
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
export default EditUserAdress ;