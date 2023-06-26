const PaymentContainer = () => {
  const paymentCardData = [
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/visa-card-img.png",
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/master-card-img.png",
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/paypal-card-img.png",
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/american-express-img.png",
  ];
  return (
    <div className="videoContainer paymentContainer" id="Delivery&Payment">
      <div className="videoContainerRight">
        <div className="goldenContainerHeading1">Delivery and Payment</div>
        <p className="goldenContainerHeading2">
          Enjoy hassle-free payment with the plenitude of payment options
          available for you. Get live tracking and locate your food on a live
          map. It's quite a sight to see your food arrive to your door. Plus,
          you get a 5% discount on every order every time you pay online.
        </p>
        <div className="buttonrow">
          <button className="yellowBtn homeScreenBtn">Order Now</button>
        </div>
        <div className="paymentCardRow">
          {paymentCardData.map((data, index) => {
            return (
              <img
                key={index}
                alt="img"
                src={data}
                className="paymentCardImg"
              ></img>
            );
          })}
        </div>
      </div>
      <div className="videoContainerLeft">
        <img
          alt="img"
          src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/delivery-payment-section-img.png"
        ></img>
      </div>
    </div>
  );
};

export default PaymentContainer;
