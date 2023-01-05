import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
const UsersThree = ({ user }) => {
  return (
    
    <div id="hoverIt">
      <Link  className="text-decoration-none suggestProContainerSuga"
       to={`/${user._id}`}>
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
          <span className="grayTexts">{user.lastname} </span>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default UsersThree;
