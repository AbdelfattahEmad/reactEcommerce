import { Container, Row } from "react-bootstrap";
import SubTitle from "../Home/subtitle";
import CategoryCart from "../Category/CategoroyCart";
import { useEffect } from "react";
import getCategoryAction from "../../Redux/Actions/CategoryAction";
import { useDispatch, useSelector } from "react-redux";



function HomeCategory(){


const dispatch = useDispatch()

const category = useSelector(state => state.AllCategory.category)




    useEffect(()=>{
        dispatch(getCategoryAction());
    },[])


    return ( 
        <Container>
            <SubTitle title="Categories" btn="More" pathText="/allCategory"/>

            <Row className=" my-2 d-flex">

            {
                category.map((cat,index)=>{
                    return <CategoryCart key={index} title={cat.title} img={cat.image}  price={cat.price}/>
                })
            }
            </Row>

        </Container>
    )}
    
export default  HomeCategory;