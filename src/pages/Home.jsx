import image from "../assets/new-exotic-bird.jpg";

export default function Home() {
  return (
    <div className="hero-container-box">
      <div className="hero-image">
        <div className="hero-avatar">
            <img src= {image} alt="exotic bird" />
          <h1>Hi, my name is Jose Guillen and welcome to my portfolio.</h1>
          <p>Don&rsquo;t mind the cool exotic bird up top.</p>
        </div>
      </div>
    </div>
  );
}
