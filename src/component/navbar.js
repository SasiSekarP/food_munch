import { RxRows } from "react-icons/rx";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [hamburgerBoolean, setHamburgerBoolean] = useState(true);
  return (
    <div className="navbarContainer">
      <div className="logoContainer">
        <img
          alt="logImg"
          src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/food-munch-logo-light.png"
        ></img>
      </div>
      <div className="linkContainer">
        <ScrollLink to="whyUs" duration={500} className="navlink">
          Why Choose Us?
        </ScrollLink>
        <ScrollLink to="ExploreMenu" duration={500} className="navlink">
          Explore Menu
        </ScrollLink>
        <ScrollLink to="Delivery&Payment" duration={500} className="navlink">
          Delivery & Payment
        </ScrollLink>
        <ScrollLink to="FollowUs" duration={500} className="navlink">
          Follow Us
        </ScrollLink>
      </div>
      <div className="hamburgerMenuContainer">
        <button
          type="button"
          onClick={() => {
            setHamburgerBoolean(!hamburgerBoolean);
          }}
          className="divhamburgerMenu"
        >
          <RxRows />
        </button>
        {hamburgerBoolean || (
          <div className="hamburgerMenuContainerDropDown">
            <ScrollLink to="whyUs" className="hamburgerMenuContainerNavlink">
              Why Choose Us?
            </ScrollLink>
            <ScrollLink
              to="ExploreMenu"
              className="hamburgerMenuContainerNavlink"
            >
              Explore Menu
            </ScrollLink>
            <ScrollLink
              to="Delivery&Payment"
              className="hamburgerMenuContainerNavlink"
            >
              Delivery & Payment
            </ScrollLink>
            <ScrollLink to="FollowUs" className="hamburgerMenuContainerNavlink">
              Follow Us
            </ScrollLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
