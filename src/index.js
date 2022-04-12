import { bugAdded, bugRemoved, bugResolved } from './store/bugs';
import configureStore from './store/configureStore';

const store = configureStore();

store.dispatch(bugAdded('bug1'));
store.dispatch(bugAdded('bug2'));
store.dispatch(bugAdded('bug3'));
console.log(store.getState());

store.dispatch(bugResolved(1));
console.log(store.getState());

store.dispatch(bugRemoved(1));
console.log(store.getState());
