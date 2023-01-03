import "bootstrap/dist/css/bootstrap.min.css";
import "./Post.css";
import { useParams } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Button } from "bootstrap";
const Posts = ({ user, setDataPost }) => {
  const params = useParams()
  // const id = params._id;
  const idRef = useRef();
  const postDelete = async(id) => {
    const res = await axios.delete(`http://localhost:8000/posts/${id}`)
    setDataPost((prev) => prev.filter((el) => el._id !== id) )
  }

  return (
    // <Link href="#" className="LinkContainer" to={`/${user.id}`}>
      <div className="postContainer">
        <div className="userProfileInPosts">
          <img src={user.image} alt="" className="posterProfile" />
          <span className="posterName">{user.name}</span>
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
          <strong>{user.likes}</strong> likes
          
        </span>
        <p style={{marginLeft:10}}><strong>{user.name}</strong>  {user.desc}</p>
        <div className="postComment">
          <span className="posterName">{user.firstname}</span>
          <span>{user.domain}</span>
        </div>
        <div className="timeAgo">
          <span>{user._id}</span>

        </div>
        <button type="button" class="btn btn-light" style={{width:50 , height:35 , marginLeft:10}} onClick={() => postDelete(user._id)}>🗑</button>
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
    // </Link>
  );
};

export default Posts;
