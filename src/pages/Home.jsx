import image from "../assets/new-exotic-bird.jpg";

export default function Home() {
  return (
    <div className="hero-container-box">
      <div className="hero-image">
        <div className="hero-avatar">
          <img src={image} alt="exotic bird" />
          <div className="hero-h1">
            <h1>Hi, my name is Jose Guillen and welcome to my portfolio.</h1>
          </div>
          <div className="hero-p">
            <p>Click the tabs above to navigate through my portfolio.</p>
            {/* <p>Don&rsquo;t mind the cool exotic bird up top.</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

//TODO: fix styling to match original portfolio
// figure out how to resize hero image
// change font size of text in hero image
