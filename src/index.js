import { bugAdded, bugAssignedToUser, bugRemoved, bugResolved, getBugsByUser, getUnresolvedBugs } from './store/bugs';
import configureStore from './store/configureStore';
import { projectAdded } from './store/projects';
import { userAdded } from './store/users';

const store = configureStore();

store.dispatch(bugAdded({ description: 'bug1' }));
store.dispatch(bugAdded({ description: 'bug2' }));
store.dispatch(bugAdded({ description: 'bug3' }));
console.log(store.getState());



// store.dispatch(bugRemoved({ id: 2 }));
// console.log(store.getState());

store.dispatch(projectAdded({name:"abc"}));
console.log(store.getState());

store.dispatch(userAdded({userID:1, name:"prat"}));
store.dispatch(userAdded({userID:2, name:"mosh"}));
console.log(store.getState());

store.dispatch(bugAssignedToUser({bugId:1, userId:1}));
console.log(store.getState());

store.dispatch(bugResolved({ id: 1 }));
console.log(store.getState());

console.log("bug assigned to user", getBugsByUser(1)(store.getState()))

console.log("Unresolved bugs",getUnresolvedBugs(store.getState()));
