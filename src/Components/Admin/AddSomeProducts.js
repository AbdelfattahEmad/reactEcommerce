import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import MultiImageInput from 'react-multiple-image-input';
import { ToastContainer } from 'react-toastify';
import addProductHook from '../../HOOKS/productHooks/productHooks';


const AddSomeProducts =()=>{

    const { onChangeDescrep,onChangeProName ,onChangePricePefore,onChangePricAfter,onChangeQuantati,loading,
        Products ,images,setImages,proName ,setproName,proDescreption,setProDescreption,priceAfter,setPriceAfter,
        priceBefore,setPriceBefore,quant,setQuant ,rating,setRating,category,handelSubmit } = addProductHook()


    return(
        <div className="">
              <div>
                  <h2>Add Some Products</h2>
                  <div className="">
                        <MultiImageInput
                            images={images}
                            setImages={setImages}
                            theme={"light"}
                            allowCrop={false}
                            max={5}
                        />
                  </div>
                <div className='my-4'>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="email" placeholder="Product Name"
                            value={proName}
                            onChange={onChangeProName}
                             />
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={3} placeholder="product Descreption"
                            value={proDescreption}
                             onChange={onChangeDescrep}
                            
                            />
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="email" placeholder="price Before Descount"
                             value={priceBefore}
                            onChange={onChangePricePefore}
                                
                            />
                        </Form.Group>

                        
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="email" placeholder="price After Descount"
                            
                            value={priceAfter}
                            onChange={onChangePricAfter}
                            />
                        </Form.Group>



                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="email" placeholder="Available quantity"
                             value={quant}
                             onChange={onChangeQuantati}
                            />
                        </Form.Group>


                        <Form.Select aria-label="Default select example"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        
                        >

                            {
                                category.map((item)=>{return(
                                    <option value={item._id} key={item._id}>{item.name}</option>


                                )})
                            }
                            <option value="1">One</option>
                            
                            
                        </Form.Select>
                     </Form>
                     <div className='my-4'>  
                     <Button onClick={handelSubmit}  variant="secondary">Save Changes</Button>{' '}
                     </div>
                     <ToastContainer/>
                  </div>
                </div>
        </div>

    )

}
export default AddSomeProducts;