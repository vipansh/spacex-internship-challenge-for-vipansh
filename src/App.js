import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { ApiCallProvider } from "./context/ApiCallContext";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="mx-24 items-center ">
      <Router>
        <Switch>
          <ApiCallProvider>
            <Route path="/" component={HomePage} />
          </ApiCallProvider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
