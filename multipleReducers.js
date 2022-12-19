
const { createStore, combineReducers } = require('redux');


//products constants
const GET_PRODUCTS = 'GET_PRODUCTS';
const ADD_PRODUCT = 'ADD_PRODUCT';


//cart constants
const GET_CART_ITEMS = 'GET_CART_ITEMS';
const ADD_CART_ITEM = 'ADD_CART_ITEM';



//Product states
const initialProductState = {
  products: ['sugar', 'salt'],
  numberofProducts: 2,
}

//Cart states
const initialCartState = {
  cart: ["sugar"],
  numberofProducts: 1,
}


//Products Actions
const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  }
}


const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  }
}


//Cart Actions
const getCart = () => {
  return {
    type: GET_CART_ITEMS,
  }
}


const addCart = (product) => {
  return {
    type: ADD_CART_ITEM,
    payload: product,

  }
}



//product Reducer
const productReducer = (state = initialProductState, action) => {

  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };

    case ADD_PRODUCT:
      return {
        products: [...state.products, action.payload],
        numberofProducts: state.numberofProducts + 1,
      }


    default:
      return state;


  }

}


//CartReducer Create 
const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case GET_CART_ITEMS:
      return {
        ...state,
      }

    case ADD_CART_ITEM:
      return {
        cart: [...state.cart, action.payload],
        numberofProducts: state.numberofProducts + 1,
      }

    default:
      return state;

  }
}


const rootReducer = combineReducers({
  productR: productReducer,
  cartR: cartReducer
})



//create store
const store = createStore(rootReducer);
store.subscribe(() => {
  console.log(store.getState());
})


store.dispatch(getProducts());
store.dispatch(addProduct("Banna"));


store.dispatch(getCart());
store.dispatch(addCart("pen"));