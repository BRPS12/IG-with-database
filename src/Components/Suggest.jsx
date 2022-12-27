import { Container, Col } from "react-bootstrap";
import "./Suggest.css";
const Suggest = ({ image, name, follower, number }) => {
  return (
    <div className="suggestBigContainer">
      <div className="div">
        <img id="Image" src={image} alt={image} />
        <div className="texts">
          <span className="namesIn">{name}</span>
          <span id="saaralTexts">
            Followed by {follower} + {number} more
          </span>
        </div>
      </div>
      <span id="follow">Follow</span>
    </div>
  );
};
export default Suggest;
