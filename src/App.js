import "./App.css";
import "./style/navbar.css";
import "./style/homescreen.css";
import "./style/goldenContainer.css";

import Navbar from "./component/navbar";
import Homedisplay from "./component/homedisplay";
import GoldenContainer from "./component/goldenContainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homedisplay />
      <GoldenContainer />
    </div>
  );
}

export default App;
