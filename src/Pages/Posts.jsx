import "bootstrap/dist/css/bootstrap.min.css";
import "./Post.css";
import { Link } from "react-router-dom";

const Posts = ({ user }) => {
  return (
    <Link href="#" className="LinkContainer" to={`/${user.id}`}>
      <div className="postContainer">
        <div className="userProfileInPosts">
          <img src={user.image} alt="" className="posterProfile" />
          <span className="posterName">   Bold-Erdene</span>
        </div>
        <img
          src={user.bgimage}
          alt=""
          className="postPicture"
        />
        <div className="postIconsContainer">
          <div className="sideIcons">
            <img
              className="postIcons"
              src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png"
              alt="#"
            />
            <img
              className="postIcons"
              src="https://cdn-icons-png.flaticon.com/512/2939/2939459.png"
              alt="#"
            />
            <img
              className="postIcons"
              src="https://cdn-icons-png.flaticon.com/512/2099/2099085.png"
              alt="#"
            />
          </div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/5662/5662990.png"
            alt="#"
            className="sideIcons postIcons"
          />
        </div>
        <span className="postReactions">
          <strong>{user.title}</strong> likes
        </span>
        <div className="postComment">
          <span className="posterName">{user.firstname}</span>
          <span>{user.domain}</span>
        </div>
        <div className="timeAgo">
          <span>{user._id}</span>
          <span>MINUTES AGO</span>
        </div>
        <hr />
        <div className="comments">
          <div className="commentLeft">
            <img
              className="postIcons"
              src="https://cdn-icons-png.flaticon.com/512/927/927567.png"
              alt="#"
            />
            <input
              className="postCommentInput"
              type="text"
              placeholder="Add a comment ..."
            />
          </div>
          <span id="postColor">Post</span>
        </div>
      </div>
    </Link>
  );
};

export default Posts;
