import { Link } from "react-router-dom";
import ErrorPage from "../assets/wrappers/ErrorPage";
import img404 from "../assets/images/not-found.svg";

const Error = () => {
  return (
    <ErrorPage className="full-page">
      <div>
        <img src={img404} alt="not found" />
        <h3>Ohh! Page Not Found</h3>
        <p>We cant seem to find the page you're looking for...</p>
        <Link to="/">Back Home</Link>
      </div>
    </ErrorPage>
  );
};
export default Error;
