import { combineReducers } from "redux";
import projectsReducer from "./projects";
import bugsReducer from "./bugs"


//this is a branch reducer under the root reducer(reducer.js).
//We can have one more branch like this one called auth,ui and so on.
const entitites = combineReducers({
    bugs: bugsReducer,
    projects: projectsReducer
})

export default entitites;