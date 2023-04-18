import { combineReducers } from "@reduxjs/toolkit";
import CategoryReducer from "./CategoryReducer";
import BrandReducer from "./BrandReducer";
import subCategoryReducer from "./subCategoryReducer";
import ProductReducer from "./subCategoryReducer";
import authReducer from "./authReducer";
import CopponReducer from "./copponReducer";
import UserAdressReducer from "./UserAdressReducer";


export default combineReducers({
    AllCategory : CategoryReducer,
    AllBrand : BrandReducer,
    subCategory : subCategoryReducer,
    ProductReducer : ProductReducer ,
     authReducer : authReducer,
     CopponReducer :CopponReducer ,
     UserAdressReducer : UserAdressReducer,
    

    

})