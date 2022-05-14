import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "./Store/index";

function App() {

  //Redux states
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  //App component states
  const [fields, setFields] = useState({addBy:0})

  function increment() {
    dispatch(actions.increment())
  }

  function decrement() {
    dispatch(actions.decrement())
  }

  function addBy(e) {
    e.preventDefault()
    dispatch(actions.addBy(Number(fields.addBy)))
  }

  function handleChange(e) {
    const {name,value} = e.target
    setFields((prevFields) => ({
      ...prevFields,
      [name] : value
    }))
  }

  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={decrement} >Decrement</button>
      <button onClick={increment}>Increment</button>
      <form action="">
        <input type="number" name="addBy" id="addBy" value={fields.addBy} onChange={handleChange} />
        <button style={{margin:"1rem 0"}} type="submit" onClick={addBy}>Add</button>
      </form>
    </div>
  );
}

export default App;
