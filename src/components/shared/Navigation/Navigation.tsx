import Logo from "../../../assets/svg/logo.svg";
import SearchOutline from "../../../assets/svg/searchoutline.svg";
import Sunny from "../../../assets/svg/sunny.svg";
import "./Navigation.css";
const Navigation = () => {
  return (
    <div className="o-navbar">
      <div className="logo-parent">
        <img className="logo-icon" alt="" src={Logo} />
        <div className="menu-parent">
          <div className="menu">
            <div className="item">
              <div className="home">Home</div>
            </div>
            <div className="item">
              <div className="home">Blog</div>
            </div>
            <div className="item">
              <div className="home">Single Post</div>
            </div>
            <div className="item">
              <div className="home">Pages</div>
            </div>
            <div className="item">
              <div className="home">Contact</div>
            </div>
          </div>
          <div className="atoms-input-parent">
            <div className="atoms-input">
              <div className="placeholder">Search</div>
              <img className="search-outline-icon" alt="" src={SearchOutline} />
            </div>
            <div className="swich">
              <div className="swich-child" />
              <div className="sunny-wrapper">
                <img className="sunny-icon" alt="" src={Sunny} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
