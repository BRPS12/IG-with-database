import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import "./Profile.css";
import Loading from "../Components/Loading";

const Settings = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const getDataById = async (id) => {
    setIsLoading(true);
    const response = await axios.get(`https://dummyjson.com/users/`);
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getDataById();
  }, []);
  return (
    <div>
      <>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="profileContainer">
            <div className="mainContainer">
              <header>
                <div className="partOne">Settings</div>
                <div className="partTwo">
                  <div className="aaaa">
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
                </div>
              </header>
              <hr />
              <footer>
                <span id="damnTextsTwo">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus ipsum libero
                </span>
                <span id="damnTexts">© 2022 INSTAGRAM FROM PINECONE</span>
              </footer>
            </div>
          </div>
        )}
      </>
    </div>
  );
};
export default Settings;
