// Reducer.js
import { add, del, edit } from './Action';

const initialState = [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case add:
            return [...state, action.payload];
        case del:
            return state.filter((_, index) => index !== action.payload);
        case edit:
            return state.map((item, index) =>
                index === action.payload.index ? action.payload.newItem : item
            );
        default:
            return state;
    }
};

export default reducer;
