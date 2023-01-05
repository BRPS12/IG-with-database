import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Profile.css";
import Loading from "../Components/Loading";

const Profile = () => {
  const params = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const getPostById = async () => {
    setIsLoading(true);
    const response = await axios.get(`http://localhost:8000/posts/${params.id}`);
    setData(response.data.data);
    setIsLoading(false);
  };

  
//    const getDataById = async (id) => {
//   await axios.get(`http://localhost:8000/users/${id}`).then(res => {
//     setData(res.data.data)
//     setIsLoading(false);
//   }).catch(err => {
//     console.log(err)
//   })
//  }


  useEffect(() => {
    
    getPostById(params.id);   

  }, [params.id]);


  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        
 <div className="profileContainer">
  
          <div className="mainContainer">
            <header>
    
           
              <div className="partOne">
                <img
                  className="zuragProfile"
                  src={data.image}
                  alt={data.image}
                />
              </div>
              <div className="partTwo">
                <div className="aaaa">
                  <span>{data.firstname} {data.lastname}</span>
                  <button>Following</button>
                  <button>Message</button>
                  <button>
                    <img
                      className="zurag"
                      src="https://cdn-icons-png.flaticon.com/512/748/748137.png"
                      alt=".!.."
                    />
                  </button>
                </div>
                <div className="aaab">
                  <span>
                    <strong>1</strong> posts
                  </span>
                  <span>
                    <strong>{data.likes}K</strong> followers
                  </span>
                  <span>
                    <strong>{data.likes}K</strong> following
                  </span>
                </div>
                <div>
                  <span>{data.firstName}</span>
                  <span>{data.email}</span>
                </div>
              </div>
            </header>
            <hr />
            <div className="posts">
              <img className="postsImages" src={data.bgimage} alt={data.image} />
            </div>
            <footer>
              <span id="damnTextsTwo">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                ipsum libero
              </span>
              <span id="damnTexts">© 2022 INSTAGRAM FROM PINECONE</span>
            </footer>
          </div>
        </div>
        
      )}
    </>
  );
};
export default Profile;
