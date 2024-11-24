import { combineReducers } from "@reduxjs/toolkit";

import { categoryReducer} from "./categories/category.slice"

export const rootReducer = combineReducers({
    categories: categoryReducer
})
