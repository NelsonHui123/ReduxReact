import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  count: state
});
const mapDispatchToProps = dispatch => ({
  addTen: () => dispatch({ type: "ADD10" }),
  addOne: () => dispatch({ type: "ADD" }),
  removeOne: () => dispatch({ type: "REMOVE" }),
  removeTen: () => dispatch({ type: "REMOVE10" }),
  reset: () => dispatch({ type: "RESET" })
});

const CounterComponent = ({
    count,
    addTen,
    addOne,
    removeOne,
    removeTen,
    reset
  }) => (
  <div>
    <p>{count}</p>
    <button onClick={addTen}>+10</button>
    <button onClick={addOne}>+1</button>
    <button onClick={removeOne}>-1</button>
    <button onClick={removeTen}>-10</button>
    <button onClick={reset}>reset</button>
  </div>
);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterComponent);
