import "./App.css";
//Importing components
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Recommended } from "./components/Recommended";

function App() {
  return (
    <div className="app">
      <Header />
      {/* sidebar */}
      <div className="container">
        <Sidebar />
        <Recommended />
      </div>
      {/* recommended videos */}
    </div>
  );
}

export default App;
