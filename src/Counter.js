import React from "react";
import { connect } from "react-redux";

function Counter(props) {
  return (
    <div>
      <h1>Counting Machine </h1>
      <p>Count : {props.count}</p>
      <button onClick={props.onIncrementClick}>Increment</button>
      <span> </span>
      <button onClick={props.onDecrementClick}>Decrement</button>
      <span> </span>
      <button onClick={props.onResetClick}>Reset</button>
    </div>
  );
}

function mapStatetoProps(state) {
  return {
    count: state.count,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrementClick: () => {
      const action = { type: "INCREMENT" };
      dispatch(action);
    },
    onDecrementClick: () => {
      const action = { type: "DECREMENT" };
      dispatch(action);
    },
    onResetClick: () => {
      const action = { type: "RESET" };
      dispatch(action);
    },
  };
}

export default connect(mapStatetoProps, mapDispatchToProps)(Counter);
