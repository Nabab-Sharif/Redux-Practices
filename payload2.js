

//state - count:0
//action- increment,decrement
//reducer
//store


const { createStore } = require('redux');


//constants define
const ADD_USER = 'ADD_USER';


//create state - count:1
const initialState = {
  users: ['Nabab'],
  count: 1,
}


//create action- increment,decrement,reset
const addUser = (user) => {
  return {
    type: ADD_USER,
    payload:user
  };
};



//Creating Reducer
const userReducer = (state = initialState, action) => {

  switch (action.type) {

    case ADD_USER:
      return {
        users: [...state.users, action.payload],
        count: state.count + 1,
      }


    default:
      state;
  }
}

//create store
const store = createStore(userReducer);

store.subscribe(() => {
  console.log(store.getState());
})


store.dispatch(addUser("rafique"));
store.dispatch(addUser("salma"));
