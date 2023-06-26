import "./App.css";
import "./style/navbar.css";
import "./style/homescreen.css";
import "./style/goldenContainer.css";
import "./style/exploremenu.css";
import "./style/videoContainer.css";
import "./style/paymentContainer.css";

import Navbar from "./component/navbar";
import Homedisplay from "./component/homedisplay";
import GoldenContainer from "./component/goldenContainer";
import Exploremenu from "./component/exploremenu";
import VideoContainer from "./component/videoContainer";
import PaymentContainer from "./component/paymentContainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homedisplay />
      <GoldenContainer />
      <Exploremenu />
      <VideoContainer />
      <PaymentContainer />
    </div>
  );
}

export default App;
