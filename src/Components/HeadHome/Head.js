import DiscountSection from '../Home/DiscountSection';
import Slider from '../Home/slider';
import HomeProducts from '../pages/HomeProduct';
import lap from "../images/lap.webp"
import BrandFeture from '../Brands/BrandFeture';
import HomeCategory from '../Category/HomeCategory';
import ViewProductsHook from '../../HOOKS/productHooks/view-products-hook';



function HeadHome() {

const [AllProduct] = ViewProductsHook()

  return (
    <div>
      <Slider/>
      <HomeCategory/>
      <HomeProducts  products={AllProduct}  title='BestSeller' pathText="/allproduct" />
      <DiscountSection img={lap}/>
      <HomeProducts products={AllProduct}  title='BestSeller' pathText="/allproduct"/>
      <BrandFeture/>
    </div>
  );
}

export default  HeadHome;
