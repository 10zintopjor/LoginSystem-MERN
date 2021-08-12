import { useState } from "react";
import Homepage from "./components/homepage/homepage";
import Register from "./components/register/register";
import Login from "./components/login/login";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [user, setLoginuser] = useState({});

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {user && user._id ? (
              <Homepage name={user.name} setLoginuser={setLoginuser} />
            ) : (
              <Login setLoginuser={setLoginuser} />
            )}
          </Route>
          <Route path="/login">
            <Login setLoginuser={setLoginuser} />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
