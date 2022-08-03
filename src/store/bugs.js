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
},

  bugAssignedToUser: (bugs,action) => {
    const{bugId, userId} = action.payload
    const index = bugs.findIndex(bug => bug.id === bugId);
    bugs[index].userId = userId;
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
   //order in which parameters are passed is important
)

export const getBugsByUser = (userId) => createSelector(
  state => state.entities.bugs, //output of this function gets passed as input of next function
  bugs =>  bugs.filter(bug=> bug.userId === userId)
)



export const {bugAdded,bugResolved, bugRemoved, bugAssignedToUser} = slice.actions;
export default slice.reducer;


