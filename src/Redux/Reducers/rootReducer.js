import { combineReducers } from "@reduxjs/toolkit";
import CategoryReducer from "./CategoryReducer";
import BrandReducer from "./BrandReducer";
import subCategoryReducer from "./subCategoryReducer";
import ProductReducer from "./subCategoryReducer";
import authReducer from "./authReducer";
import CopponReducer from "./copponReducer";


export default combineReducers({
    AllCategory : CategoryReducer,
    AllBrand : BrandReducer,
    subCategory : subCategoryReducer,
     AllProducts: ProductReducer ,
     authReducer : authReducer,
     CopponReducer :CopponReducer ,
    

    

})