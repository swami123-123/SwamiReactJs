
import { configureStore, createSlice } from '@reduxjs/toolkit';
const productslice = createSlice({
    name: 'products',

    initialState: {
        veg: [{ name: 'tomato', price: 200.5 },
        { name: 'potato', price: 239.96 },
        { name: 'onion', price: 346.96 },
        { name: 'mirchi', price: 473.96 },
        { name: 'carrot', price: 872.96 },
        { name: 'beetroot', price: 632.96 },
        { name: 'beans', price: 764.96 }, 
        ],
        Nonveg: [
            { name: 'chicken', price: 500.5 },
            { name: 'fish', price: 999.96 },
            { name: 'mutton', price: 2133.96 },
            { name: 'beef', price: 1631.96 },
            { name: 'prawns', price: 1532.96 },
            { name: 'egg', price: 1637.96 },
        ],
    },
    reducers: {}
});
const cartSlice = createSlice({

    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {

            const stat = state.find(item => item.name === action.payload.name);
            if (stat) {
                stat.quantity += 1;
            }
            else {
                state.push({ ...action.payload, quantity: 1 });
            }
        }, 
        removeFromCart:(state, action) => {
            const stat = state.find(item => (item.name === action.payload.name));

            if (stat) {
                if (stat.quantity === 1) {
                    state.pop({ stat });
                }
                else {
                    stat.quantity -= 1;
                }

            }

        },
        deleteFromCart:(state,action)=>{

            return state.filter(product=>product.name != action.payload.name);

        }
    }
    });


const store = configureStore({
    reducer: {
        products: productslice.reducer,
        cart: cartSlice.reducer,
    }
});
export const { addToCart, removeFromCart, deleteFromCart } = cartSlice.actions;
export default store;