import About from "./component/About";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import React, { useState } from "react";
import Alert from "./component/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1000);
  };

  const toglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#13233a";
      showAlert("Dark mode is enable", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "White";
      showAlert("Light mode is enable", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <Router>
      <Navbar title="TextUtils" mode={mode} toglemode={toglemode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TextForm
              showAlert={showAlert}
              heading="Enter the text Of utilize"
              mode={mode}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
