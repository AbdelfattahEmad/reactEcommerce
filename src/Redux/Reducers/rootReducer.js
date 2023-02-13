import { combineReducers } from "@reduxjs/toolkit";
import CategoryReducer from "./CategoryReducer";
import BrandReducer from "./BrandReducer";

export default combineReducers({
    AllCategory : CategoryReducer,
    AllBrand : BrandReducer,
})