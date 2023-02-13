import DiscountSection from '../Home/DiscountSection';
import Slider from '../Home/slider';
import HomeProducts from '../pages/HomeProduct';
import lap from "../images/lap.webp"
import BrandFeture from '../Brands/BrandFeture';
import HomeCategory from '../pages/HomeCategory';



function HeadHome() {
  return (
    <div>
      <Slider/>
      <HomeCategory/>
      <HomeProducts pathText="/allproduct"/>
      <DiscountSection img={lap}/>
      <HomeProducts pathText="/allproduct"/>
      <BrandFeture/>
    </div>
  );
}

export default  HeadHome;
