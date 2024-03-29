import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeadHome from './Components/HeadHome/Head';
import NavbarLogin from './Components/Home/NavbarLogin';
import FooterSection from './Components/pages/FooterSection';
import LoginPage from './Components/login/LoginPages';
import RegisterPage from "./Components/login/RegisterPage"
import AllCategory from './Components/Category/AllCategoryPage';
import AllBrands from './Components/Brands/AllBrands';
import ShopProducts from './Components/Products/ShopProducts';
import ProductDetailsPage from './Components/Products/ProductDetailsPage';
import CartPage from './Components/Cart/CartPage';
import  PayMethod  from './Components/Cart/paymentMethod';
import AdminAllProductPage from './Components/Admin/AdminAllProductPage';
import AllOrdersPage from './Components/Admin/AllOrderPage';
import AddCategoryPage from './Components/Category/AddCategoty';
import AdminAddBrandPage from './Components/Brands/AdminAddBrand';
import AdminAddProductPage from './Components/Admin/AdminAddProduct';
import AdminSubCat from './Components/Admin/AdminSubCat';
import UserAllProductPage from './Components/User/UserAllProductPage';
import AddUserProduct from './Components/User/AddUserProduct';
import AllFavorateProduct from './Components/User/AllFavorateProduct';
import PersonalData from './Components/User/PersonalData';
import ProfileUser from './Components/User/profileUser';
import AdminAddProductPages from './Components/Admin/AddPoroudctspages';
import ForgetPassword from './Components/login/forgetPassord';
import veriefyPassword from './Components/login/verify-password-page';
import ResetPassword from './Components/login/ResetPassordPage';
import AddCoponPage from './Components/Admin/addCupponPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { autoLogin } from './Redux/Actions/authAction';
import EditCoponPage from './Components/Admin/AdminEditCopponPage';
import UserAllAdress from './Components/User/AddNewPresonalData';
import UserEditAdress from './Components/User/userEditPAge';





function App() {
 const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(autoLogin())

  },[])
  return (
    <div>
      <NavbarLogin/>
      <BrowserRouter>
      <Routes>
        <Route index element={<HeadHome/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/Register" element={<RegisterPage/>}/>
        <Route path="/allCategory" element={<AllCategory/>}/>
        <Route path="/allbrand" element={<AllBrands/>}/>
        <Route path="/allproduct" element={<ShopProducts/>}/>
        <Route path="/products/:id" element={<ProductDetailsPage/>}/>

        <Route path="/Sp/cuppon" element={< AddCoponPage />}/>

        <Route path="/admin/editcopon/:id" element={<EditCoponPage/>}/>


        <Route path="/Cart" element={<CartPage/>}/>
        <Route path="/order/paymethoud" element={<PayMethod/>}/>
        <Route path="/admin" element={<AdminAllProductPage/>}/>
        <Route path="/admin/order" element={<AllOrdersPage/>}/>
        <Route path="/admin/cat" element={<AddCategoryPage/>}/>
        <Route path="/admin/brand" element={<AdminAddBrandPage/>}/>
        <Route path="/admin/addProduct" element={<AdminAddProductPage/>}/>
        <Route path="/admin/addsubCat" element={<AdminSubCat/>}/>
        <Route path="/admin/Data" element={<UserAllProductPage/>}/>
        <Route path="/admin/UP" element={<AddUserProduct/>}/>
        <Route path="/admin/Fav" element={< AllFavorateProduct/>}/>
        <Route path="/admin/personal" element={<PersonalData/>}/>
        <Route path="/admin/Profile" element={<ProfileUser/>}/>
        <Route path="/Sp/admin" element={<AdminAddProductPages/>}/>
        <Route path="/user/forget-password" element={<ForgetPassword />}/>
        <Route path="/user/veriyfy-code" element={<veriefyPassword />}/>
        <Route path="/user/changePassord" element={<ResetPassword/>}/>
        

        <Route path="/admin/addUser" element={<UserAllAdress/>}/>
        <Route path="/admin/editUser/:id" element={<UserEditAdress/>}/>

      </Routes>
      </BrowserRouter>
      <FooterSection/>

    </div>
  );
}

export default App;
