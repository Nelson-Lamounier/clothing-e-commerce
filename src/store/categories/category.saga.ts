import { takeLatest, all, call, put } from "typed-redux-saga/macro";
import {fetchCategoriesAPI} from "../../api/category.api"

import {
    Category,
    fetchCategoriesFailed,
    fetchCategoriesStart,
    fetchCategoriesSuccess,
} from "./category.slice"

/**
 * Worker saga to handle fetching categories.
 */
export function* fetchCategoriesSaga(action: { payload: string }) {
    try{
        const categories = yield* call(fetchCategoriesAPI, action.payload);
        yield* put(fetchCategoriesSuccess(categories))
    } catch (error) {
        yield* put(fetchCategoriesFailed( error as Error))
    }
}

export function* onFetchCategories() {
    yield* takeLatest(fetchCategoriesStart.type, fetchCategoriesSaga)
}

export function* categoriesSage() {
    yield* all([call(onFetchCategories)]);
}