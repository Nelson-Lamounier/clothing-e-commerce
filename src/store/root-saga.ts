import { all, call} from "typed-redux-saga/macro"
import {categorySage} from "./categories/category.saga"


export function* rootSaga() {
    yield all([call(categorySage)]);
}