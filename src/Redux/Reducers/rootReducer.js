import { combineReducers } from "@reduxjs/toolkit";
import CategoryReducer from "./CategoryReducer";
import BrandReducer from "./BrandReducer";
import subCategoryReducer from "./subCategoryReducer";

export default combineReducers({
    AllCategory : CategoryReducer,
    AllBrand : BrandReducer,
    subCategory : subCategoryReducer,
    

    

})