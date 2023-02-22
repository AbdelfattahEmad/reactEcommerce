import empty from '../images/empty.png'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import MultiImageInput from 'react-multiple-image-input';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getCategoryAction from '../../Redux/Actions/CategoryAction'


const AddSomeProducts =()=>{



const category = useSelector(state => state.AllCategory.category)

if(category){
    console.log(category)
}

const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getCategoryAction());
    },[])




    
// value image product 
    const [images, setImages] = useState({})

    //forms state
    const [proName, setproName] = useState("")
    const [proDescreption, setProDescreption] = useState("")
    const [priceBefore, setPriceBefore] = useState("")
    const [priceAfter, setPriceAfter] = useState("")
    const [rating, setRating] = useState()
    const [quant, setQuant] = useState()

    



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
                            onChange={(e) => setproName(e.target.value)}
                             />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={3} placeholder="product Descreption"
                            value={proDescreption}
                             onChange={(e) => setProDescreption(e.target.value)}
                            
                            />
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="email" placeholder="price After Descount"
                            
                            value={priceAfter}
                            onChange={(e) => setPriceAfter(e.target.value)}
                            />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="email" placeholder="price Before Descount"
                             value={priceBefore}
                            onChange={(e) => setPriceBefore(e.target.value)}
                                
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="email" placeholder="Available quantity"
                             value={quant}
                            onChange={(e) => setQuant(e.target.value)}
                            />
                        </Form.Group>


                        <Form.Select aria-label="Default select example"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        
                        >
                            <option>Brand</option>

                            {
                                category.map((item)=>{return(
                                    <option value={item._id}>{item.name}</option>


                                )})
                            }
                            <option value="1">One</option>
                            
                            
                        </Form.Select>
                     </Form>
                     <div className='my-4'>  

                     
                     <Button  variant="secondary">Save Changes</Button>{' '}
                     </div>


                  </div>

                </div>
        </div>

    )

}
export default AddSomeProducts;