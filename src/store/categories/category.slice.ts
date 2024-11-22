/*
A Redux slice is a construct introduced by Redux Toolkit (RTK) that combines the logic for state management, 
action creators, and reducers for a specific feature or domain into a single, concise file. 
A slice simplifies how you define and manage state in your Redux store by encapsulating 
all related logic for a particular “slice” of your application’s state.


*/
import { createSlice, PayloadAction, isAnyOf } from "@reduxjs/toolkit";

export interface CategoryItem {
    id: number;
    imageUrl: string;
    title: string;
    description: string;
    price: number;
}

export interface Category{
    title: string;
    imageUrl: string;
    items: CategoryItem[];
}

export type CategoryMap = {
    [key:string]: CategoryItem[];
}

// Define the shape of the state
export interface CategoryState {
    categories: Category[];
    isLoading: boolean;
    error: string | null | Error;

}

// Inital state with the defined type
export const CATEGORIES_INITIAL_STATE: CategoryState = {
    categories: [],
    isLoading: false,
    error: null,
}

// Define the slice
export const categorySlice = createSlice({
    name: "categories",
    initialState: CATEGORIES_INITIAL_STATE,
    reducers: {
        setCategories(state, action: PayloadAction<Category[]> ) {
            state.categories = action.payload;
        },
        // Actio to start fetching categories
        fetchCategoriesStart(state) {
            state.isLoading = true;
            state.error = null;
        },
        // Action to handle successful fetch
        fetchCategoriesStar(state) {
            state.isLoading = true;
            state.error = null;
        },
        // Action to handle successful fetch
        fetchCategoriesSuccess(state, action: PayloadAction<Category[]>) {
            state.categories = action.payload;
            state.isLoading = false;
            state.error =null;
        },
        // Action to handle failed fetch
        fetchCategoriesFailed(state, action: PayloadAction<Error>) {
            state.isLoading = false;
            state.error = action.payload.message
        }
    }, extraReducers: (builder) => {
        // Using matchers with Redux Saga actions
        builder.addMatcher(
            isAnyOf(fetchCategoriesStart, fetchCategoriesSuccess, fetchCategoriesFailed),
            (state, action) =>{
                if (fetchCategoriesStart.match(action)) {
                    state.isLoading = true;
                    state.error = null;
                } else if (fetchCategoriesSuccess.match(action)) {
                    state.categories = action.payload as Category[];
                    state.isLoading = false;
                } else if (fetchCategoriesFailed.match(action)) {
                    state.error = action.payload as Error;
                    state.isLoading = false;
                }
            }
        )
    }
})

export const {
    fetchCategoriesStart,
    fetchCategoriesSuccess, fetchCategoriesFailed
} = categorySlice.actions;

export const categoriesReducer = categorySlice.reducer

/*
Advantages of Using Matchers
1.	Consolidated Logic: Reduces boilerplate by handling multiple actions with shared logic in one place.
2.	Flexibility: You can integrate actions dispatched from sagas, thunks, or other middleware without directly coupling them to the slice.
3.	Scalability: As the application grows, you can add matchers for new actions without cluttering your slice logic.

*/