import { Link } from "react-router-dom";
import LandingPage from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import main from "../assets/images/main.svg";

const Landing = () => {
  return (
    <LandingPage>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>Tracking</span> App
          </h1>
          <p>
            I'm baby lo-fi health goth kombucha marfa vibecession, 8-bit pok pok
            tacos. Humblebrag bespoke chia succulents, post-ironic typewriter
            selfies. Copper mug lomo twee glossier blue bottle.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login / Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </LandingPage>
  );
};

export default Landing;
