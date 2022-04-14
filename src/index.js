import { bugAdded, bugRemoved, bugResolved } from './store/bugs';
import configureStore from './store/configureStore';

const store = configureStore();

store.dispatch(bugAdded({ description: 'bug1' }));
store.dispatch(bugAdded({ description: 'bug2' }));
store.dispatch(bugAdded({ description: 'bug3' }));
console.log(store.getState());

store.dispatch(bugResolved({ id: 1 }));
console.log(store.getState());

store.dispatch(bugRemoved({ id: 1 }));
console.log(store.getState());
