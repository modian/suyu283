import { faCommentDots as farCommentDots, faUser as farUser } from "@fortawesome/free-regular-svg-icons";
import { faBatteryFull, faBolt, faCog, faComment, faEllipsisH, faMusic, faSearch, faWifi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Chats() {

  return (
    <>
      <div className="status-bar">
        <div className="status-bar__column">
          <span>No Service</span>
          <FontAwesomeIcon icon={faWifi} />
        </div>
        <div className="status-bar__column">
          <span>18:43</span>
        </div>
        <div className="status-bar__column">
          <span>110%</span>
          <FontAwesomeIcon icon={faBatteryFull} size='lg' />
          <FontAwesomeIcon icon={faBolt} />
        </div>
      </div>

      <header className="screen-header">
        <h1 className="screen-header__title">Chats</h1>
        <div className="screen-header__icons">
          <span><FontAwesomeIcon icon={faSearch} size='lg' /></span>
          <span><FontAwesomeIcon icon={farCommentDots} size='lg' /></span>
          <span><FontAwesomeIcon icon={faMusic} size='lg' /></span>
          <span><FontAwesomeIcon icon={faCog} size='lg' /></span>
        </div>
      </header>

      <main className="main-screen">
        <Link to='/kokoa/chat' >
          <a>
            <div className="user-component">
              <div className="user-component__column">
                <img src={require("kokoa/img/stein_icon2.jpg")} className="user-component__avatar" />
                <div className="user-component__text">
                  <h4 className="user-component__title">Stein</h4>
                  <h6 className="user-component__subtitle">
                    Please check My Kokoa Account Info
                  </h6>
                </div>
              </div>
              <div className="user-component__column">
                <span className="user-component__time">21:22</span>
                <div className="badge">1</div>
              </div>
            </div>
          </a>
        </Link>
      </main>

      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__btn">
            <Link to='/kokoa/friends' >
              <a className="nav__link">
                <FontAwesomeIcon icon={farUser} size='2x' />
              </a>
            </Link>
          </li>
          <li className="nav__btn">
            <Link to='/kokoa/chats' >
              <a className="nav__link">
                <span className="nav_notification_comment badge">1</span>
                <FontAwesomeIcon icon={faComment} size='2x' />
              </a>
            </Link>
          </li>
          <li className="nav__btn">
            <Link to='/kokoa/find' >
              <a className="nav__link">
                <FontAwesomeIcon icon={faSearch} size='2x' />
              </a>
            </Link>
          </li>
          <li className="nav__btn">
            <Link to='/kokoa/more' >
              <a className="nav__link">
                <FontAwesomeIcon icon={faEllipsisH} size='2x' />
                <span className="nav_notification_ellipsis"></span>
              </a>
            </Link>
          </li>
        </ul>
      </nav>

      <div id="no-mobile">
        <span>Your screen is too big</span>
      </div>
    </>
  );
};

export default Chats;