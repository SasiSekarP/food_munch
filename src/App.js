import "./App.css";
import "./style/navbar.css";
import "./style/homescreen.css";

import Navbar from "./component/navbar";
import Homedisplay from "./component/homedisplay";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homedisplay />
    </div>
  );
}

export default App;
