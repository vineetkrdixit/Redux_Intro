/**
 * Counter Reducer
 * @param {*} = State:it will have the curent state of the entire store
 * @param {*} = Action : it will have the action which has to be performed by the reducer sent by the controller
 * @return {8}= Returns the updated store derived from currentstate of store and Actions from controller
 *
 */
const initialState = {
  count: 0,
};

const CounterReducer = (store = initialState, action) => {
  console.log("actionfrom reducers", action);

  switch (action.type) {
    case "counter/increment": {
      return {
        count: store.count + 1,
      };
    }
    case "counter/decrement": {
      return {
        count: store.count - 1,
      };
    }
    case "counter/addbyvalue": {
      return {
        count: store.count + action.payload.inputValue,
      };
    }
    case "counter/asyncadd": {
      return store;
    }
    default: {
      return store;
    }
  }
};

export default CounterReducer;
