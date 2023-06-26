import { BsTwitter, BsInstagram, BsFacebook } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="followContainer">
      <div className="goldenContainerHeading1">Follow Us</div>
      <div className="MediaContainer">
        <div className="iconbackground">
          <BsTwitter />
        </div>
        <div className="iconbackground">
          <BsInstagram />
        </div>

        <div className="iconbackground">
          <BsFacebook />
        </div>
      </div>
    </div>
  );
};
export default SocialMedia;
