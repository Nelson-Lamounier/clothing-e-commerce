import { combineReducers } from "@reduxjs/toolkit";

import { userReducer } from "./user/user.slice";
import { categoryReducer} from "./categories/category.slice"

export const rootReducer = combineReducers({
    user: userReducer,
    categories: categoryReducer
})
