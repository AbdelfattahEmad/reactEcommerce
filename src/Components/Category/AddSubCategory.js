import Form from 'react-bootstrap/Form';
import { Button, Spinner } from 'react-bootstrap';
import { ToastContainer} from 'react-toastify';
import AddCategoryHook from '../../HOOKS/CategoryHooks/addCategoryHook';

const AddSubCategory=()=>{


  const [handleSubmit,onImageChange, img,name,SelectedFile,loading,isPress ,onChangeName,btnDisable] = AddCategoryHook();
  
    return(
        <div>
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


        <Form.Control 
         className='my-3'
         onChange={onChangeName}
        type="text"
        id="inputPassword5"
        placeholder='Descreption'
        aria-describedby="passwordHelpBlock"
        value={name}

      />


        <div>
        <Button disabled={btnDisable} variant="primary"onClick={handleSubmit}>Save</Button>
        </div>

      {

        isPress ? loading? 
        (<Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>):(<h4>finshed</h4>) :null  
      }
          <ToastContainer />
      </div>


    );

}
export default AddSubCategory