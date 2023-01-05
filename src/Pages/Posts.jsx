import "bootstrap/dist/css/bootstrap.min.css";
import "./Post.css";
import { useParams } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Button } from "bootstrap";
const Posts = ({ post, setDataPost }) => {
  const params = useParams()
  // const id = params._id;
  const idRef = useRef();

  const postDelete = async (id) => {
    const res = await axios.delete(`http://localhost:8000/posts/${id}`)
    setDataPost((prev) => prev.filter((el) => el._id !== id) )
  }

 const updatePost = async (id) => {
  const res = await axios.put(`http://localhost:8000/posts/${id}` , {
    desc : idRef.current.value 
  })
  setDataPost((prev) => prev.map((el) => {
    if(id === el._id) {
      console.log(res.data.Post)
      return {...el, desc: idRef.current.value}
    }
    return el
  }))
 }

  return (
    // <Link href="#" className="LinkContainer" to={`/${user.id}`}>
      <div className="postContainer">
        <div className="userProfileInPosts">
          <img src={post.image} alt="" className="posterProfile" />
          <span className="posterName">{post.firstname} {post.lastname}</span>
        </div>

        <img
          src={post.bgimage}
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
          <strong>{post.likes}</strong> likes
          
        </span>
        <p style={{marginLeft:10}}><strong>{post.firstname} {post.lastname}</strong>  {post.desc}</p>
        <div className="postComment">
          <span className="posterName"></span>
          <span>{post.domain}</span>
        </div>
        <div className="timeAgo">
          <span>{post._id}</span>

        </div>
        <button type="button" class="btn btn-light" style={{width:50 , height:35 , marginLeft:10}} onClick={() => postDelete(post._id)}>🗑</button>
        <hr />
        <div className="comments">
          <div className="commentLeft">
            <img
              className="postIcons"
              src="https://cdn-icons-png.flaticon.com/512/927/927567.png"
              alt="#"
            />
            <input
            style={{width:300 , height : 30}}
            class="form-control"
            placeholder="Update"
              ref={idRef}
            />
          </div>
          <button style={{marginTop:10}}
         type="button" class="btn btn-dark" onClick={() => updatePost(post._id)} >Update</button>
        </div>
    
      </div>
    // </Link>
  );
};

export default Posts;
