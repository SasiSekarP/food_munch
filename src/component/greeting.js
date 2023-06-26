import { AiOutlineClose } from "react-icons/ai";

import { useState } from "react";

const Greeting = () => {
  const [layerMessageBoolean, setLayerMessageBoolean] = useState(false);

  return (
    <div>
      <div className="greetingContainer">
        <div className="greetingContainerLeft">
          <div className="goldenContainerHeading1">
            Thank you for being a valuable customer to us.
          </div>
          <p className="goldenContainerHeading2">
            We have a surprise gift for you
          </p>
          <div className="buttonrow">
            <button
              className="greetingBtn"
              type="button"
              onClick={() => {
                setLayerMessageBoolean(true);
              }}
            >
              Redeem Gift
            </button>
          </div>
        </div>
        <div className="greetingContainerImg">
          <img
            alt="img"
            src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/thanking-customers-section-img.png"
          ></img>
        </div>
      </div>
      {layerMessageBoolean && (
        <div className="flyingMessage">
          <div className="messageBox">
            <div className="row">
              <div className="flymessageheader">Gift Voucher</div>
              <button
                type="button"
                className="flymessageBtn"
                onClick={() => {
                  setLayerMessageBoolean(false);
                }}
              >
                <AiOutlineClose />
              </button>
            </div>
            <img
              alt="img"
              src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/gift-voucher-img.png"
            ></img>
          </div>
        </div>
      )}
    </div>
  );
};

export default Greeting;
