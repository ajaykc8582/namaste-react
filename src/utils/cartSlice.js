import { createSlice, current } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action)=>{

            // Vanialla(older) Redux => Don't MUTATE STATE
            // const newState = [...state];
            // newState.items.push(action.payload);
            // return newState;

            //Redux Toolkit uses immer behind the scene to manage older version code
            // mutating the state here(current redux-toolkit)
          state.items.push(action.payload);
        },
        removeItem: (state)=>{
            state.items.pop();
        },
        clearCart: (state)=>{
            //Use current to console log to get the state value 
            // console.log(current(state));
            // Redux Toolkit says -> either Mutate the existing state or return a new state
            // state.items.length = 0 //make state empty array[]

            return {items: []}; // this new object will be replaced inside originalState = {items: []}
        },
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;