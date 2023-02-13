import { Container, Row } from "react-bootstrap"
import CategoryCart from "../Home/CategoroyCart";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getCategoryAction from "../../Redux/Actions/CategoryAction";



const CategoryContainer=({title })=>{

    
    const dispatch = useDispatch()


    const category = useSelector(state => state.AllCategory.category)

    useEffect(()=>{
        dispatch(getCategoryAction());
       
    },[])
    return(
        <Container>
        <div className="my-4">{title}</div>
        <Row className=" my-2 d-flex">

        {
                category.map((cat,index)=>{
                    return <CategoryCart title={cat.name} img={cat.image ? cat.image :<p>not found</p>} key={index} price={cat.price}/>
                })
            }


        </Row>
    </Container>

    )
}

export default CategoryContainer
