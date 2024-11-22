import { all, call} from "typed-redux-saga/macro"
import {categoriesSage} from "./categories/category.saga"


export function* rootSaga() {
    yield all([call(categoriesSage)]);
}