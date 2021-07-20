import Header from "./components/Header";
import "./styles.css";
import { Switch, Route } from "react-router-dom";
import Photos from "./pages/Photos";
import Card from "./pages/Card";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Photos />
        </Route>
        <Route path="/card">
          <Card />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
