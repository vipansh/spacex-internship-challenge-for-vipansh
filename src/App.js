import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import "./App.css";
import FlightDetails from "./Modals/FlightDetails";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="mx-24 items-center ">
      <Router>
        <Switch>
          <Route path="/" component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
