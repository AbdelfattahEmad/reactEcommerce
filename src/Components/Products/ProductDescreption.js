import { Button } from "react-bootstrap"

const ProductDescreption =()=>{
    return(
        <div className="mx-8 my-5 mx-5">
            <h1>Clothes</h1>
            <p>Change the underlying component CSS base class name and modifier class
                 names prefix. This is an escape hatch for working with heavily customized
            </p>
            <p>Brand :<span className="Desc-products">zara</span></p>
            <p><span className="Desc-products">Descreption</span> : Change the underlying component CSS base class name and modifier class
                 names prefix. This is an escape hatch for working with heavily customizedChange 
                 the underlying component CSS base class name and modifier class
                 names prefix. This is an escape hatch for working with heavily customized </p>
                 
                 <div>
                    <p>price : <span className="Desc-products">50$</span></p>
                    <Button
                     variant="dark">Add To Cart</Button>

                    </div>

        </div>
    )

}
export default ProductDescreption