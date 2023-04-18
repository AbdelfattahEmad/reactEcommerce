import Form from 'react-bootstrap/Form';
import { Button} from 'react-bootstrap';
import { ToastContainer} from 'react-toastify';
import  AddSubCategoryHook  from '../../HOOKS/subCategory/addSubCategoryHook';


const AddProduct =()=>{


  const  [id,name,loading,category,subCategory,handelChange,handelSubmit,onChangeName]=AddSubCategoryHook()

 


    return(

        <div className="">
              <div>
                  <h2>Add a new subcategory</h2>
                  <Form.Control
                      type="text"
                      id="inputPassword5"
                      aria-describedby="passwordHelpBlock"
                      placeholder='Classification name'
                      className='my-4'
                      value={name}
                      onChange={(e)=> onChangeName(e.target.value)}

                    />
                      <Form.Select  name="category" id="cat" className='my-3' onChange={handelChange}>
                        <option value="0">Choose a subcategory</option>
                      {
                        category.length > 0 ? (category.map((item)=>{return(<option key={item.id}>{item.name}</option>)})) : null
                      }
                        
                    

                      </Form.Select>
                  </div>

                   <Button onClick={handelSubmit} variant="primary">Enter</Button>{' '}
                   <ToastContainer/>

        </div>

    )

}
export default AddProduct;