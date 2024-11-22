import { combineReducers } from "@reduxjs/toolkit";

import { categoriesReducer} from "./categories/category.slice"

export const rootReducer = combineReducers({
    categories: categoriesReducer
})
