import { useEffect, useState } from "react";
import Users from "./Users";
import Posts from "./Posts";
import axios from "axios";
import "../App.css";
import Loading from "../Components/Loading";
import { Link } from "react-router-dom";
import Suggest from "../Components/Suggest";
// import UserPost from "./UserPost";

const Home = () => {
  const [data, setData] = useState([]);
  // const [post, setPost] = useState([]);
  const [dataPost, setDataPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const instance = axios.create({
    baseURL: "http://localhost:8000/",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const getData = async () => {
    setIsLoading(true);
    const response = await instance.get("/users");
    setData(response.data.data);
    setIsLoading(false);
  };
  const getDataPost = async () => {
    try {
      setIsLoading(true);
      const response = await instance.get("/posts");
      setDataPost(response.data.Post);
      setIsLoading(false);

    } catch (error) {

    }
   
  
  };

  useEffect(() => {
    getData();
    getDataPost();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="bigContainer">
          <div className="main">
            <div className="Users">
              {data &&
                data.map((user, index) => {
                  return <Users key={user._id} user={user} />;
                })}
            </div>
            <div className="bigPostContainer">
              {/* try new thing */}
              {dataPost &&
                dataPost.map((user, index) => {
                  return (
                    <div className="jojo">
                      <Posts setDataPost={setDataPost} key={index} user={user} />
                    </div>
                  );
                })}
              {/* end here */}
            </div>
          </div>
          <div className="suggestYou">
            <Link
              to="/5"
              className="text-decoration-none suggestProContainerSuga"
              style={{ display: "flex", color: "black" }}
            >
              <div className="suggestProContainer">
                <img
                  src="https://robohash.org/adverovelit.png"
                  alt=""
                  className="suggestProfile"
                />
                <div className="negNeg">
                  <span className="nameININ">Yundt</span>
                  <span className="grayTexts">Mavix</span>
                </div>
              </div>
              <p id="switch">Switch</p>
            </Link>
            <div id="gantshanContainer">
              <span id="suggestions">Suggestions For You</span>
              <span id="seeAll">See All</span>
            </div>
            <div className="suggestCONTAINS">
              <Suggest
                image={
                  "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
                }
                name="wiecznyx"
                follower="munguljingo"
                number="69"
              />
            </div>
            <p id="damnTextsTwo">
              About·Help·Press·API·Jobs·Privacy·Terms·Locations·Language·
              English
            </p>
            <p id="damnTexts">© 2022 INSTAGRAM FROM PINECONE</p>
          </div>
        </div>
      )}
    </>
  );
};
export default Home;
