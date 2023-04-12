import Form from 'react-bootstrap/Form';
import { Button, Spinner } from 'react-bootstrap';
import AddBrandHook from '../../HOOKS/BrandHooks/addBrandHooks';
import { ToastContainer} from 'react-toastify';


const AddBrand =()=>{

  const { handleSubmit,onImageChange, img,name,SelectedFile,loading,isPress ,onChangeName,btnDisable }= AddBrandHook()
  
    return(

<div className="">

    <div>
            <label htmlFor="upload-photo">
            <img src={img} 
            alt='fzx'
            height="100px"
            width="120px"
            style={{cursor : "pointer"}}
             className='my-3'
             />
            </label>

            <input
            type="file"
            name="photo"
            onChange={onImageChange}

           
            id="upload-photo"
            />
          </div>

    <div>
    <Form.Control 
         className='my-3'
         onChange={onChangeName}
        type="text"
        id="inputPassword5"
        placeholder='Descreption'
        aria-describedby="passwordHelpBlock"
        default={name}
        value={name}
      />
    </div>
    <div>
    <Button onClick={handleSubmit} variant="primary" disabled={btnDisable}>Enter</Button>{' '}

    </div>

{
isPress ? loading ? 
(<Spinner animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner>): "" : null  
}
<ToastContainer />

</div>


    )

}
export default AddBrand ;