import { createSelector } from "@reduxjs/toolkit";

import { Category, CategoryMap } from "./category.slice";
import { RootSate } from "../store";

const selectCategoryReducer = (state: RootSate) => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice): Category[] => categoriesSlice.categories
);
export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories): CategoryMap => categories.reduce((acc, category) => {
    const { title, items} = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {} as CategoryMap)
);

export const selectCategoriesIsLoading = createSelector(
    [selectCategoryReducer], (categoriesSlice) => categoriesSlice.isLoading
)