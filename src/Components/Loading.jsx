import "./Loading.css";

const Loading = () => {
    return (
        <div className="loadingContainer">
            <br />
            <img className="loading" src={require("../Images/igLogo.png")} alt="#" />
            <p className="loadingNames">Azbileg, Bold-Erdene, Battugs, Munkhtushig</p>
        </div>
    )
}

export default Loading;