import { bugAdded, bugRemoved, bugResolved } from './store/bugs';
import configureStore from './store/configureStore';
import { projectAdded } from './store/projects';

const store = configureStore();

store.dispatch(bugAdded({ description: 'bug1' }));
store.dispatch(bugAdded({ description: 'bug2' }));
store.dispatch(bugAdded({ description: 'bug3' }));
console.log(store.getState());

store.dispatch(bugResolved({ id: 1 }));
console.log(store.getState());

store.dispatch(bugRemoved({ id: 2 }));
console.log(store.getState());

store.dispatch(projectAdded({name:"abc"}));
console.log(store.getState());
