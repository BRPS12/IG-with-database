import { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import UsersTwo from "../Components/UsersTwo"
import "bootstrap/dist/css/bootstrap.min.css";
import { FaBars } from "react-icons/fa";

const Sidebars = () => {
  const [expanded, setExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [expandedTwo, setExpandedTwo] = useState(false);

  const instance = axios.create({
    baseURL: "http://localhost:8000/",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const getData = async () => {
    setIsLoading(true);
    const response = await instance.get(`/users`);
    console.log(response.data.users);
    setData(response.data.data);
    setIsLoading(false);
    setExpanded(false);
  };
  useEffect(() => {
    getData();
    setExpanded(false);
    setExpandedTwo(false);
  }, []);

  const searchHandler = () => {
    if (expanded === false) {
      setExpanded(true);
      console.log(expanded);
    } else if (expanded === true) {
      setExpanded(false);
      console.log(expanded);
    }
  };

  const menuHandler = () => {
    if (expandedTwo === false) {
      setExpandedTwo(true);
      console.log(expandedTwo);
    } else if (expandedTwo === true) {
      setExpandedTwo(false);
      console.log(expandedTwo);
    }
  };
  return (
    <div>
      <>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {!expanded ? (
              <div className="sideBars">
                <div className="menus">
                  {/*  */}
                  <>
                    <div className="aaad">
                      <div className="igIcon">
                        {!expanded ? (
                          <Link
                            to="/"
                            href="#"
                            style={{ color: "black", display: "flex" }}
                            className="text-decoration-none"
                          >
                            <img
                              className="ignone"
                              onClick={getData}
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png"
                              alt="#"
                              width={"125px"}
                            />
                          </Link>
                        ) : (
                          <Link
                            to="/"
                            href="#"
                            style={{ color: "black", display: "flex" }}
                            className="text-decoration-none haveLinks"
                          >
                            <img
                              onClick={getData}
                              src="data:image/png;base64,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"
                              alt=""
                              width={25}
                            />
                          </Link>
                        )}
                      </div>
                      <div className="icons">
                        <div onClick={getData} className="menuSideIcons">
                          <Link
                            to="/"
                            href="#"
                            style={{ color: "black", display: "flex" }}
                            className="text-decoration-none haveLinks"
                          >
                            <img
                              src="https://cdn-icons-png.flaticon.com/512/1946/1946436.png"
                              alt=""
                              className="iconsSizes"
                            />
                            <strong className="homeIconText">
                              {!expanded && "Home"}
                            </strong>
                          </Link>
                        </div>
                        <div onClick={searchHandler} className="menuSideIcons">
                          <img
                            src="https://cdn-icons-png.flaticon.com/512/149/149852.png"
                            alt=""
                            className="iconsSizes"
                          />
                          <div className="srchIconText">
                            {!expanded && "Search"}
                          </div>
                        </div>
                        <div className="menuSideIcons displayNone">
                          <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEX///8AAADx8fH29vb5+fnPz8/f398ICAjt7e3U1NTl5eXr6+u1tbXDw8O7u7uhoaFwcHBkZGRcXFw7OzvBwcFhYWEkJCSfn5/KyspWVlYPDw+srKxqamodHR0mJiZLS0uWlpaFhYUXFxdGRkYxMTF1dXWBgYEtLS2NjY2Xl5c+Pj5HR0f4pU5fAAAOeUlEQVR4nN1d2WLqOAydJiHsS6GFQqAQunE7//9/U0opSJZkx5YT5p7HNjh2bEvH2vzPP7GRJd1RsXhfb2fPm1X77u6uvdo8z7br90Ux6iZZ9PfHRD8fHNazOxmzdVl0+0131QPdYvKysgzuCp+TQbfpLldAd7xsuw/ugu34/zDKZPTmM7hfTAZJ00OQ0CumQcM7YVr0mh4IjXSwVBjeCdvB7cnY1kRteCesW00P6RrJ2KYTfPC6uJUtmb9HGN4J77ewI7sawoXHtGkF0t1GHd8R2yY3ZPexeoc9uEBj85i7jm+/LHfFqNXr9zudJEk6nX6/1xoVu/Lx2bGFx7yB8SUu3OV5PR7KArEzHK/nDi29pzWN6xdjW5c+puOWq9rOWsXjh63BcdTxYLQs+m+6yKuSkixfWFb9rD6Rk8kL9G3ou6LSodzyu+oweAyFPqzWw8DWn96kY2Vo6y5IBQK6HGkQ5mwkkIhJdCbXYgX86qAn0nsHVm3OI+/GHTu+QvlNxYZ71UH5TdfofzIv3cbYH0OOEX5GM1w91Tm+7xdyY4z0wgX9tllM+fbEKN5FjJfdk6/aD2K86wqjPfneR/UXJfTH3NVgT6Gl26uy2shJdnxfzxG8Ry6fuep5g5YxI81XiHgg3/+k94IB1f5Er30HkIRVTQYUROP7B63WHTGkGIASzaCOgtP6DX0JdbhSOTT+idVwZVCfehfeLCGrn5uyDHUJ2r8LbZT4bsvaTSa/SAnXSOB6IoRMTGpvx8HsUJC4IdSE9ilJoUsBSoNQ9Ipa1hMtxU7lRlObJiyzGLmpGT27lRhcdN7R7asnOmbH/NTzK27ntTkhCpGZXfNpxqAQn7cywC+t8YI7d1+9EeNE/3I7A6SGWPnUb4jRm1miJ6TGQq0oUPvYXrm5rQF+7UVD3FSzwGGz4eY2pOg1OlhpfFb5tcGNbkEPYhjqugKfNGhD80yGgiErnA3+KV7iTXNRDpijPrsKC+xdavY0cUK/S20UvJscbUfYP7hU7aoXRkdr7epgGmfxedHJ/p75Tn00PJ11X9uYxxSf+l3aw3a7psUoCLoyvnYX9dbBEY7laMNSprcGvSmNB7CZxS5PkX9iGqPbzkhwUODKfAa5xGe2NtEn2TcZAJkSRhlzzyTIOWWxTCWowTpiHziMKb8aYcjEsl+eFCRm6vVNAAzokAjK24X095vULKZ6kXpvxxMTBEbvMvSQJP3Rub5u78sZXTYmnnbojeBDgn8YKRcPy4AGenxMEico0czwGgMJ3kaCrFMpapw74/TgYyzPRFO4izICGSkbknQEr5zRz7hJhNEr+waSOsZyMhjv88qgZtnST6EpjB1GYmJgWJcg1tJvXb4F3IVW9qMNTkFcIMoFyDbJ9Yx0Yc1shlcQv5CPDYjZUDoRyjBmJUcCHTGDYKHIUIoQnwMx0jqn0DhBkLDZUtAkmt8DHipqnELqBEFgbzU1wEk0jxhQjtU2hZlFQQg9xoCBU4Y3Ch7tN1FGQ2Dkkk1yxNyhMagTsdaHXLAm08WQV4BzRE5dtDMMq0AnP2hgI2wFESDkva0WaNd8OLUI3UmQk0FKUIcJOBcUxCHBYS5ubgUos+C0Q30b34Ao5YW99b/WFDzhO4p2SFrACaPH/ysGJAUx/eZmyAPtGmYGJ+qa5cE1ETkyNhPy3pYnCYjoh0S5AeBmu5aXgHSv4h6bCj6t8jfsH82x867JgKy5ot/wk0U1sD3xCmL1KxrQFIrGMwhoIb8wNzi5Ed2hLSOE4jK+q2AKpAsrWKWh0/Sy3WCLiiOCsCiIy3PoX1XewUw+82dddCQFAQIh4IdoV3IswJec/wrNF3FIt6QgUNoG8n5VCwWC9PssoqD0juEQzZicqSOMigKQzD1Xk+wp+PH5QAL0ZAx3WsGfIF6MJYNOslUPAUDxnbkLaFE/K+yBT/xeEUcGqC4rn+PAammf/ga3oTYnbXFZmV/vp061iHJXlgpQEHfNNj90CU0uJC0fqB2PwtWqW1MyYJQ8rRGgDVW3YV9QECUdaIdEkkdaM/imJ34GeIZmNgyVL/UDLq8vhVYbnzxKoBlejn+BgZaKueD8AJfsZvel3FcA6nR1pBJwa+ptQ+TxuvquvPTowCe9zgDQIHP8RuBTP/uOxwTj59xLp0+0b/2CWoGsOoqaMvirkcDBSieQCuIXiHKb4UFOWOM2wB/0BA2pJiyJ0ejs4RnLA0TN0TwAGIca7SZyd+7eLasO/eaP56sB7ZvhjakWAkUwNavoh3Yk79h5KK4yZDHwbNQAiv84wRLbEUi5L0BzBiSCmiilrTGyzQz6gAO6AoRpF35tLc7GKXtJVCNPfIBJcwrbAZ3xlM8YZraHwyzC9IlKyRMI5XVDBaS6vuILgUr/tg0RmYlD2CMIrllA972OVw1aEtyGiKJEg7YL+Fgl1LI69vxSGiGzF1FQU1A+PBAta2j3UTlZ9MUB0rPo66ggAZjDEqpmlVg9SLnbphmY6D+i3GGFoMCpZga1kEaJKYM+Q18COUR00gqsrQcW0QcU0hojRLGeHewuoYaoQ7nPALRt8w8wGyhkGVL02Twq3lt/EwAwwhX07iuMEBoPf3yR5hDBLCpR7jOA2GpjmhoKhj6bC/VKaaA8wuAzanI9a3CEq/ARQvp8sVhLswhpuktskIwE7DzlOUSU+yrYnx+iHuX+AZpD1X2IgkT+vf4fO0RI072qI0CgfagqSxF9hv5yZi+Kv/ECkqWa+hBRbkyfyVnUpNw/QPoQrKvAEZaw/4bFmtKLmpT7B4jTKPJSZLEmzDLmQr2HUxhGuX+AeKni2cKBPttuwVCh/uhsAT5rkKR2sljLQ9SJA0HnQ70zPqLPjFwWh6hjrkVnfGCn2QW065o1Ze7FXyjFtSI7jZqt7V/QWSH8j53FlVKgS3ndaKFmL61gseaGqOUWAkeVkZrNG9LnvfgsvVDnWt5ZZPNW8ltUo8/kENUSBECrCfI9+RJTZOV+sT1PDFHNZ4J9Tzr+w2r0Od0RqfZqrksQvHdMMtTwAacw08ESCk+WEtDLtDJ8wCX+gwdQkIhInwe020YvzMXw4wMZ4WdCQBZryRPKJQIpZsYbsRgK8TSIcvP0ucVmiuoFDJrxNOExUYhysxZrIVNUya13hBkTFR7X5ka5pThvxQFCon1SW6GxichivSMfkkoJ3KvGtBKxiaHxpTAum6bPY/ZOFe2b41IivjQwRtjBYs0oiCM22qkBVIxwYJw3NJESyZlDvpTAXD9ZlYrzDovVt1Fu4QbI1ThCDhkZqx+SbwHDqo0gETERKEZmB51vEZIzgyg3/LGYCBSnihidMxOQ9wTdPJByi4lAsRJx6bwn7s8O4Cm3VEpgGe9mMWayvPMPEeW+iq8UEoFeIyY4QmvRRex555BylHvIZ8LOo2YZczmkUMS2nWU4Q7mFUgL7uLebpFwesG8uN7K2nBwVuWDy3UWuhcrncvvl4yMr97fFOhGs9u/Ry0zy+fh+NRXgj44FZBJBQayj3en3C6GmglddDINyZwv+wuZlHbfvSHUxfGqbQL42F0sJ1FMQXKpt4lGfBlHuCV9K4LmmC9rE+jQeNYZc79Te1FaJWK4xhDwr9rqe1murf/CntmLZljpRVWt9pfTVkhjxFcQFtlpfFeu1OZUgm8RXEBdASkpVYiirTCKuqExhWm+tcziFlDcbRSLLk2ivkvdS303o30A+aNLuDg0OYu1LNgP2jNovgETJcrQbBJ0UpAppArk+IoIJzQaknZkN4lyDls6APaO9qL96bQYNCpwUoc4KJIRCCbCWTm1Aop2VASiRgPOScfdzHzFp5FIhJBd4m69jPW++Vkk0E5oFzvW88ZNOFdAv2DZ1P6l7TXa3uvrMFH40d48C6om4kJAmp8xutC6c118c+xfIcCJnTeHkSEJxU6oiio/FFfh+C8thBiVMEHeUmHd3xvGxuALfUWJlG/Z7ZrC1PpKPxRVIOdtTpHG5B/OcVYL/c7V06kL1u4KMY4OhAq4ZUi0mNAke9z0ZsndubLL8bNOK6WNxg9edXQYpM03gWXmcxllNJjQJOMbK8ZNjzy1FwfNuw/vvG9iW4urdNab+Vu8/xOU33C/B++vvsDQqHDR/gR4Fg3rsqvz6/3iXrDW4HODvvw/477/TmfBL/G33chtxsX/f3epENaubWajmEvXLAE+MvXwjErVjdOzZ8wBnnnU3t6AXczPe2LtbhGG0eXZD1CsM6BS++PqueY5KdCnICEaUlmv2lm7CMxv4zQl3/bY5kZoSOTfBkXJEdbl5U6aLLhH/sQtvliqgFzfCkAMV/rGL1fCyfgtiQvn0lD41Vcmydjf2kMq6URPshISu+75nMupf0VdC+0Trs7U9kO9XZR9dMjPrsR57W++RevlGWaIndOjhIb7PKaPz+l71TwF0hAl1B4cqBnTaRpQbtZm7YmYxfb9DxuEcSSE/MUHO21hjfOLSGqKdcPrcjSrbGNrxgRvfS8yQRzabd1Uoy5yCzauNfLhpscHPq4OeASA/sFH/8+gxj6mQU7gcaExkOhJusK7FpS4FfbXXoVLnacInbdR3T7EcPzt58D0ipw/CArkLri9cBS0+tO0b00Vedb2m+UIMeby7+6w36tiajPCx/NNyHWXWGk/5lPYf1G4Cc7oQfXM/Hsr8sfMwnrjkprw3YRzKScpPYL8sd+NRq9fvdJIjOp1+rzUa78pH17ybx6Ys0S3LziHQbkuikkajQTtCQqwWlCuDVIdUNUEB900HXR2Rl7GG136/haCdI5KxRT964XXRbNAjQktmI9UxaXr7mcgGAmGuCB0KHwG9orr6MDEtbmX3kUhGYcv1bXBTm49BPp5WV+tfknM7vgUnuiu6g8mLWyLt9+BeJoNbUHxV0clHh7VNj8zWZZHXmU2rjyzpjopFuV7OPjarL1babq82H7PlulwUo24SX2b+B574t8XaVMldAAAAAElFTkSuQmCC"
                            alt=""
                            className="iconsSizes rounded50"
                          />
                          <div className="srchIconText ">
                            {!expanded && "Explore"}
                          </div>
                        </div>
                        <div className="menuSideIcons displayNone">
                          <img
                            src="https://cdn-icons-png.flaticon.com/512/5948/5948543.png"
                            alt=""
                            className="iconsSizes"
                          />
                          <div className="srchIconText">
                            {!expanded && "Reels"}
                          </div>
                        </div>
                        <div className="menuSideIcons displayNone">
                          <img
                            src="https://cdn-icons-png.flaticon.com/512/5948/5948514.png"
                            alt=""
                            className="iconsSizes"
                          />
                          <div className="srchIconText">
                            {!expanded && "Messages"}
                          </div>
                        </div>
                        <div className="menuSideIcons displayNone">
                          <img
                            src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png"
                            alt=""
                            className="iconsSizes"
                          />
                          <div className="srchIconText">
                            {!expanded && "Notifications"}
                          </div>
                        </div>
                        <div className="menuSideIcons displayNone">
                          <Link to="/Create"
                          href="#"
                          style={{ color: "black", display: "flex" }}
                          className="text-decoration-none haveLinks">
                          
                          <img
                            src="https://cdn-icons-png.flaticon.com/128/3388/3388934.png"
                            alt=""
                            className="iconsSizes"
                          />
                          <div className="srchIconText">
                            {!expanded && "Create"}
                          </div>
                          </Link>
                        </div>
                        <div className="menuSideIcons">
                          <Link
                            to="/5"
                            className="text-decoration-none haveLinks"
                            style={{ display: "flex", color: "black" }}
                          >
                            <img
                              src="https://robohash.org/adverovelit.png"
                              alt=""
                              className="iconProfile"
                            />
                            <div className="srchIconText">
                              {!expanded && "Profile"}
                            </div>
                          </Link>
                          <Link>
                            <div className="menuSideIcons displayNone"></div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </>
                  <div className="more">
                    <button onClick={menuHandler} className="nnn more">
                      <span>
                        <FaBars />
                      </span>
                      {!expanded && "More"}
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="sideBarsTwo">
                <div className="menus">
                  <div className="menusTwo">
                    <div className="igIcon">
                      {!expanded ? (
                        <Link
                          to="/"
                          href="#"
                          style={{ color: "black", display: "flex" }}
                          className="text-decoration-none"
                        >
                          <img
                            onClick={getData}
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png"
                            alt="#"
                            width={"120px"}
                          />
                        </Link>
                      ) : (
                        <Link
                          to="/"
                          href="#"
                          style={{ color: "black", display: "flex" }}
                          className="text-decoration-none haveLinks"
                        >
                          <img
                            onClick={getData}
                            src="data:image/png;base64,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"
                            alt=""
                            width={35}
                          />
                        </Link>
                      )}
                    </div>
                    <div className="icons">
                      <div onClick={getData} className="menuSideIcons">
                        <Link
                          to="/"
                          href="#"
                          style={{ color: "black", display: "flex" }}
                          className="text-decoration-none haveLinks"
                        >
                          <img
                            src="https://cdn-icons-png.flaticon.com/512/1946/1946436.png"
                            alt=""
                            className="iconsSizes"
                          />
                          <div className="homeIconText">
                            {!expanded && "Home"}
                          </div>
                        </Link>
                      </div>
                      <div onClick={searchHandler} className="menuSideIcons">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/149/149852.png"
                          alt=""
                          className="iconsSizes"
                        />
                        <div className="srchIconText">
                          {!expanded && "Search"}
                        </div>
                      </div>
                      <div className="menuSideIcons displayNone">
                        <img
                          src="data:image/png;base64,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"
                          alt=""
                          className="iconsSizes"
                        />
                        <div className="srchIconText">
                          {!expanded && "Explore"}
                        </div>
                      </div>
                      <div className="menuSideIcons displayNone">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/5948/5948543.png"
                          alt=""
                          className="iconsSizes"
                        />
                        <div className="srchIconText">
                          {!expanded && "Reels"}
                        </div>
                      </div>
                      <div className="menuSideIcons displayNone">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/5948/5948514.png"
                          alt=""
                          className="iconsSizes"
                        />
                        <div className="srchIconText">
                          {!expanded && "Messages"}
                        </div>
                      </div>
                      <div className="menuSideIcons displayNone">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png"
                          alt=""
                          className="iconsSizes"
                        />
                        <div className="srchIconText">
                          {!expanded && "Notifications"}
                        </div>
                      </div>



                      
                      <div className="menuSideIcons displayNone">
                      <Link
                      to="/Create" 
                      href="#" 
                      className="text-decoration-none haveLinks">
                        <img
                          src="https://cdn-icons-png.flaticon.com/128/3388/3388934.png"
                          alt=""
                          className="iconsSizes"
                        />
                        <div className="srchIconText">
                          {!expanded && "Create"}
                        </div>
                        </Link>
                      </div>
                      



                      <div className="menuSideIcons">
                        <Link
                          to="/5"
                          className="text-decoration-none haveLinks"
                          style={{ display: "flex", color: "black" }}
                        >
                          <img
                            src="https://robohash.org/adverovelit.png"
                            alt=""
                            className="iconProfile"
                          />
                          <div className="srchIconText">
                            {!expanded && "Profile"}
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="more moreTwo">
                    <span>
                      <FaBars />
                    </span>
                    {!expanded && "More"}
                  </div>
                  {/*  */}
                </div>
              </div>
            )}

            {/* search heseg endees eheljiinaa */}

            <div
              className="searchmenu"
              style={{
                background: "white",
                height: "100vh",
                width: expanded ? "300px" : "0px",
                position: "fixed",
                left: "3%",
                border: "1px solid black",
                opacity: expanded ? "1" : "0",
                display: expanded ? "block" : "none",
                transition: "0.1s",
                zIndex: 0,
              }}
            >
              <h2 className="SearchP">Search </h2>
              <div className="joke">
                <div class="searchContainer">
                  <input
                    onChange={(e) => setValue(e.target.value)}
                    class="form-control searchInput"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </div>
                <div className="allUsers">
                  <div id="aaac">
                    <strong className="recentSpan">Recent</strong>
                  </div>
                  {data &&
                    data.map((user, index) => {
                      return (
                        user.firstname.includes(value) && (
                          <UsersTwo key={index} user={user} />
                        )
                      );
                    })}
                </div>
              </div>
            </div>
          </>
        )}

        {/* menu heseg */}

        <div
          className="menuHiive"
          style={{
            display: expandedTwo ? "block" : "none",
          }}
        >
          <div className="loveNeg">
            <Link to="/Settings" href="#" className="menuLink">
              Settings
            </Link>
          </div>
          <hr />
          <div className="loveNeg">
            <Link to="/LogOut" className="menuLink">
              Log Out
            </Link>
          </div>
        </div>
      </>
    </div>
  );
};
export default Sidebars;
