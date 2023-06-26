import { RxRows } from "react-icons/rx";
import { useState } from "react";

const Navbar = () => {
  const [hamburgerBoolean, setHamburgerBoolean] = useState(true);
  return (
    <div className="navbarContainer">
      <div className="logoContainer">
        <img
          alt="logImg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbxTZmj0VxIFQAEnoB1Jyd4I9kNrSvaSV5Qg&usqp=CAU"
        ></img>
      </div>
      <div className="linkContainer">
        <div className="navlink">Why Choose Us?</div>
        <div className="navlink">Explore Menu</div>
        <div className="navlink">Delivery & Payment</div>
        <div className="navlink">Follow Us</div>
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
            <div className="hamburgerMenuContainerNavlink">Why Choose Us?</div>
            <div className="hamburgerMenuContainerNavlink">Explore Menu</div>
            <div className="hamburgerMenuContainerNavlink">
              Delivery & Payment
            </div>
            <div className="hamburgerMenuContainerNavlink">Follow Us</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
