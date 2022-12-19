
//npm i redux-logger

const { createStore,applyMiddleware} = require('redux');
const { default: logger } = require('redux-logger');


//products constants
const GET_PRODUCTS = 'GET_PRODUCTS';
const ADD_PRODUCT = 'ADD_PRODUCT';




//Product states
const initialProductState = {
  products: ['sugar', 'salt'],
  numberofProducts: 2,
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




//create store
const store = createStore(productReducer,applyMiddleware(logger));
store.subscribe(() => {
  console.log(store.getState());
})


store.dispatch(getProducts());
store.dispatch(addProduct("Banna"));
