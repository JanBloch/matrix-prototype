import { enableMapSet } from "immer";
import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import { Matrix } from "./components/organism/matrix";
import store from "./redux";
function App() {
  enableMapSet();
  return (
    <Provider store={store}>
      <Matrix />
    </Provider>
  );
}

export default App;
