const GoldenContainer = () => {
  const cardData = [
    {
      img: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/food-serve.png",
      heading: "Food Service",
      para: "Experience fine dining at the comfort of your home. All our orders are carefully packed and arranged to give you the nothing less than perfect.",
    },
    {
      img: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/fruits-img.png",
      heading: "Fresh Food",
      para: "The Fresh Food group provides fresh-cut fruits and vegetables directly picked from our partner farms and farm houses so that you always get them tree to plate.",
    },
    {
      img: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/offers-img.png",
      heading: "Best Offers",
      para: "Food Coupons & Offers upto 50% OFF and Exclusive Promo Codes on All Online Food Orders.",
    },
  ];
  return (
    <div className="goldenContainer">
      <div className="goldenContainerHeading1">Why Choose Us?</div>
      <div className="goldenContainerHeading2">
        We use both original recipes and classic versions of famous food items.
      </div>
      <div className="goldenCardContainer">
        {cardData.map((data, index) => {
          return (
            <div className="goldenCard" key={index}>
              <img
                alt="img"
                src={data.img}
                className="goldenCardContainerImg"
              ></img>
              <div className="goldenCardContainerHeader">{data.heading}</div>
              <p className="goldenCardContainerPara">{data.para}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GoldenContainer;
