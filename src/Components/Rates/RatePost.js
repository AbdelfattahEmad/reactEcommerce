import React from "react";
import ReactStars from "react-rating-stars-component";

const RatePost=()=>{

    const setting = {
        size:25,
        count: 5,
        color: "gold",
        activeColor: "black",
        value: 7.5,
        a11y: true,
        isHalf: true,
        emptyIcon: <i class="fa-regular fa-star"/>,
        halfIcon: <i class="fa-regular fa-star-half-stroke"/>,
        filledIcon: <i className="fa-sharp fa-solid fa-star" />,
        onChange: newValue => {
          console.log(`Example 2: new value is ${newValue}`);
                    }
      };
      
    return(
    
         <div>
                 <ReactStars {...setting} />
  
        </div>
            )
}
 export default RatePost