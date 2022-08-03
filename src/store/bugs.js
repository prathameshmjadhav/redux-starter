import { createSelector, createSlice } from '@reduxjs/toolkit';

let lastId = 0;

// bugs slice
// createSlice combines steps of createReducer and createAction into one
// Remember to use curly braces while using arrow functions else it throws Immer error
const slice = createSlice({
  name:"bugs",
  initialState:[],
  reducers: {
    bugAdded: (bugs,action) => { 
    bugs.push({
      id:++lastId,
      description:action.payload.description,
      resolved: false
    })}
  ,
  bugResolved: (bugs, action) => {
    const index = bugs.findIndex(bug => bug.id === action.payload.id)
    bugs[index].resolved = true
  },
  bugRemoved: (bugs, action) => {
    const index = bugs.findIndex(bug => bug.id === action.payload.id)
    bugs.splice(index,1)    
}
  },
  
  
})

//createSelector is a function of reselect library which memoizes the data,
//memoization is technique which provides re-execution of an expensive function
//when input is not changed, this is used widely while re-rendering components in react

export const getUnresolvedBugs = createSelector(
  state => state.entities.bugs,
  state => state.entities.projects,
  (bugs,projects) => bugs.filter(bug => !bug.resolved)
)



export const {bugAdded,bugResolved, bugRemoved} = slice.actions;
export default slice.reducer;


