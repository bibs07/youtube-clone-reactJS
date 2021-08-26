import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Importing components
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Recommended } from "./components/Recommended";
import { SearchPage } from "./components/SearchPage";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/search/:searchTerm">
            <div className="app__container">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            {/* sidebar */}
            <div className="app__container">
              <Sidebar />
              <Recommended />
            </div>
            {/* recommended videos */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
