import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Login";
import Table from "./Table";

const App = () => (
  <Router>
    <Route exact path="/" component={Login} />
    <Route path="/table" component={Table} />
  </Router>
);

render(<App />, document.getElementById("root"));

export default App;
