import { bugAdded, bugRemoved, bugResolved } from './actions';
import store from './store';

store.dispatch(bugAdded('bug1'));
console.log(store.getState());

store.dispatch(bugResolved(1));
console.log(store.getState());

store.dispatch(bugRemoved(1));
console.log(store.getState());
