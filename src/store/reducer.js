import { combineReducers } from "redux";
import entitiesReducer from "./entities"


//this is root reducer 
const reducer = combineReducers(
    {entities:entitiesReducer}
)

export default reducer