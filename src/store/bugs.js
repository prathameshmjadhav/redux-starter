import { createSlice } from '@reduxjs/toolkit';

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
  }
  
  // bugRemoved: (bugs, action) => {
  //   const delBugs = bugs.filter(bug=> bug.id !== action.payload.id);
  //   return delBugs
  // }
})


export const {bugAdded,bugResolved, bugRemoved} = slice.actions;
export default slice.reducer;


