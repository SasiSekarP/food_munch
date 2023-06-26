import "./App.css";
import "./style/navbar.css";
import "./style/homescreen.css";
import "./style/goldenContainer.css";
import "./style/exploremenu.css";
import "./style/videoContainer.css";
import "./style/paymentContainer.css";
import "./style/greeting.css";
import "./style/socialMedia.css";
import "./style/footer.css";
import "./style/layermessge.css";

import Navbar from "./component/navbar";
import Homedisplay from "./component/homedisplay";
import GoldenContainer from "./component/goldenContainer";
import Exploremenu from "./component/exploremenu";
import VideoContainer from "./component/videoContainer";
import PaymentContainer from "./component/paymentContainer";
import Greeting from "./component/greeting";
import SocialMedia from "./component/socialmedia";
import Footer from "./component/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homedisplay />
      <GoldenContainer />
      <Exploremenu />
      <VideoContainer />
      <PaymentContainer />
      <Greeting />
      <SocialMedia />
      <Footer />
    </div>
  );
}

export default App;
