import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const UsersTwo = ({ user }) => {
  return (
    <div id="hoverIt">
      <Link
        href="#"
        style={{ color: "white" }}
        className="text-decoration-none paddingUm"
        to={`/${user._id}`}
      >
        <div className="userTwoContainer">
          <img className="userProfileTwo" src={user.image} alt="" />
          <div className="texts">
            <span
              style={{
                fontFamily: "Rockwell",
                color: "black ",
              }}
            >
              {user.firstname}
            </span>
            <span className="grayTexts">{user.lastname}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default UsersTwo;
