import { legacy_createStore as createStore } from 'redux';
import reducerFunction from './Reducer';

const store = createStore(reducerFunction)


export default store;

