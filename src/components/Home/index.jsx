import { Link, useLocation } from "react-router-dom";

import "./style.css";

const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <h1>
          <p>Hi,</p>
          <p>I'm Achyuth Reddy</p>
          <p>FrontEnd developer</p>
        </h1>
        <Link to="about">
          <button>More Info</button>
        </Link>

        <a
        href="https://docs.google.com/document/d/1SYl8Rb75KSXwk4XUOOjZaE8bZPvb80TE49gGTjBHToo/edit?usp=sharing"
        target="_blank"
      >
        <button1>Resume</button1>
      </a>




      </div>
      <div className="person">
        <img
          src="https://res.cloudinary.com/des7uyibo/image/upload/v1613400532/images_30_zdynoe.jpg"
          alt="person picture"
        />
      </div>
    </div>
  );
};

export default Home;
