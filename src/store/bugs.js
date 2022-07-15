import { createAction, createReducer } from '@reduxjs/toolkit';

let lastId = 0;

export const bugAdded = createAction('bugAdded');
export const bugRemoved = createAction('bugRemoved');
export const bugResolved = createAction('bugResolved');

//Reducers or action Handlers

 export default createReducer(
  [],
  {[bugAdded.type]:(bugs, action) => {
    bugs.push({
      id:++lastId,
      description:action.payload.description,
      resolved: false
    });
    },
  
  
    [bugResolved.type]: (bugs, action) => {
      const index = bugs.findIndex(bug => bug.id === action.payload.id)
      bugs[index].resolved = true
    }
  }
)


// export default function reducer(state = [], action) {
//   switch (action.type) {
//     case bugAdded.type:
//       return [
//         ...state,
//         {
//           id: ++lastId,
//           description: action.payload.description,
//           resolved: false,
//         },
//       ];

//     case bugRemoved.type:
//       return state.filter((bug) => bug.id !== action.payload.id);

//     case bugResolved.type:
//       return state.map((bug) =>
//         bug.id === action.payload.id ? { ...bug, resolved: true } : bug
//       );

//     default:
//       return state;
//   }
// }
