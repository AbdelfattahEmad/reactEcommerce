import { Container } from "react-bootstrap";
import BrandCard from "../Brands/BrandCard";
import SubTitle from "../Home/subtitle";
import HomeBrandHook from "../../HOOKS/BrandHooks/HomeBrandHook";
import Spinner from 'react-bootstrap/Spinner';


function BrandFeture({img}){

const [brand,loading] = HomeBrandHook()

    return(
        <Container className="d-flex">

            <SubTitle  btn="More" pathText="/allbrand"/>

            {
                loading === false ? (
                brand.length ? (brand.map((item,index)=>{
                    return <BrandCard title={item.title} img={item.image} data={brand} key={index} />
                })

                )  : <h2>no Brands</h2>
                ) :  <Spinner animation="border" />

            }

        </Container>


    )
}
export default BrandFeture;