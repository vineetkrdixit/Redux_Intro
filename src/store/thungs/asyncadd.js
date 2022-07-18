import { CounterAction } from "../actions/CounterAction";

const asyncadd = (action) => (dispatch, getState) => {
  //here getState is the current store
  const state = getState();
  if (action.type === CounterAction.asyncadd) {
    setTimeout(() => {
      dispatch({
        type: CounterAction.asyncadd,
        payload: {
          incrementValue: 11,
        },
      });
    }, 2000);
  }
};
export default asyncadd;
