import React, { useState } from "react";
import { connect } from "react-redux";
import store from "../../store";
import { CounterAction } from "../../store/actions/CounterAction";
import "../containers/Counter.css";
import asyncadd from "../../store/thungs/asyncadd";

const Counter = (props) => {
  const { count, increment, decrement, addbyvalue, asyncadd } = props;
  const [inputValue, setInputValue] = useState();
  const handelChange = (e) => {
    setInputValue(e.target.value);
  };
  //   const Increment = () => {};
  //   const Decrement = () => {};
  //   const AddByValue = () => {};
  //   const asyncadd = () => {
  //     return inputValue;
  //   };

  return (
    <>
      <div className="card main-card">
        <div className="d-flex justify-content-center">
          <h1>Redux Counter</h1>
        </div>
        <div className="d-flex justify-content-center mt-4">
          <button
            className="btn btn-warning btn-sm"
            onClick={() => increment()}
          >
            Increment
          </button>
          <h2 className="m-2">{count}</h2>
          <button
            className="btn btn-warning btn-sm"
            onClick={() => decrement()}
          >
            Decrement
          </button>
        </div>
        <br></br>
        <div className="d-flex justify-content-center mb-3">
          <input
            type="number"
            className="form-control input-filed mt-1"
            value={inputValue}
            onChange={handelChange}
          />
          <button
            className="btn btn-warning mt-2 m-2 btn-sm"
            onClick={() => addbyvalue(inputValue)}
          >
            Add By value
          </button>
          <button
            className="btn btn-warning mt-2 m-2 btn-sm"
            onClick={() => asyncadd()}
          >
            Async Add
          </button>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (store) => {
  console.log("Storein Component", store);

  return {
    count: store.CounterReducer.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: CounterAction.increment }),
    decrement: () => dispatch({ type: CounterAction.decrement }),
    addbyvalue: (inputValue) =>
      dispatch({
        type: CounterAction.addbyvalue,
        payload: {
          inputValue,
        },
      }),
    asyncadd: () =>
      dispatch(
        asyncadd({
          type: CounterAction.asyncadd,
        })
      ),
  };
};

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

export default connectToStore(Counter);
