import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import { useParams } from "react-router-dom";
import ViewProductDetailssHook from "../../HOOKS/productHooks/view-product-details-hook";

const ProductGallary=()=>{

  const [id] = useParams()
  const [item , images] =ViewProductDetailssHook(id)


    return(

     <div>
        <ImageGallery items={images} 
        showFullscreenButton={false}
        showPlayButton={false}
        />
     </div>  
    )

}
export default ProductGallary;