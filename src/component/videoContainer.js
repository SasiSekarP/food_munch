const VideoContainer = () => {
  const redirectToYouTube = () => {
    window.location.href = "https://www.youtube.com/shorts/SR4_mQPk0ss";
  };

  return (
    <div className="videoContainer videoContainerBackgroundColor">
      <div className="videoContainerLeft">
        <img
          alt="img"
          src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/healthy-food-plate-img.png"
        ></img>
      </div>
      <div className="videoContainerRight">
        <div className="goldenContainerHeading1">
          Fresh, Healthy, Organic, Delicious Fruits
        </div>
        <p className="goldenContainerHeading2">
          Say no to harmful chemicals and go fully organic with our range of
          fresh fruits and veggies. Pamper your body and your senses with the
          true and unadulterated gifts from mother nature. with the true and
          unadulterated gifts from mother nature.
        </p>
        <div className="buttonrow">
          <button
            className="yellowBtn homeScreenBtn"
            onClick={redirectToYouTube}
          >
            Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoContainer;
