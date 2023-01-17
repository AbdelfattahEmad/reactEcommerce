import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import jak from "../images/jak.webp"

const ProductGallary=()=>{

    const images = [
        {
          original:`${jak}`
     
        },
        {
          original: `${jak}`
        
        },
        {
          original: `${jak}`
          
        },
      ];
      
    return(

     <div>
        <ImageGallery items={images} 
        defaultImage={jak}
        showFullscreenButton={false}
        showPlayButton={false}
        />
     </div>  
    )

}
export default ProductGallary;