import { BsArrowRight } from "react-icons/bs";

const Exploremenu = () => {
  const menudata = [
    {
      img: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-ginger-fried-img.png",
      title: "Non-Veg Starters",
    },
    {
      img: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-veg-starters-img.png",
      title: "Veg Starters",
    },
    {
      img: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-soup-img.png",
      title: "Soups",
    },
    {
      img: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-grilled-seafood-img.png",
      title: "Fish & Sea food",
    },
    {
      img: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-hyderabadi-biryani-img.png",
      title: "Main Course",
    },
    {
      img: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-mushroom-noodles-img.png",
      title: "Noodles",
    },
    {
      img: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-gluten-img.png",
      title: "Salads",
    },
    {
      img: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-coffee-bourbon-img.png",
      title: "Desserts",
    },
  ];
  return (
    <div className="goldenContainer">
      <div className="goldenContainerHeading1">Why Choose Us?</div>
      <div className="menucardContainer">
        {menudata.map((data) => {
          return (
            <div className="menuCard">
              <img alt="img" className="menuCardImg" src={data.img}></img>
              <div className="menuCardTitle">{data.title}</div>
              <div className="viewAll">
                View All <BsArrowRight />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Exploremenu;
