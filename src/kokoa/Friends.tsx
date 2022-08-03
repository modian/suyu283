import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBatteryFull, faBolt, faChevronRight, faChevronUp, faCog, faComment, faEllipsis, faEllipsisH, faInfoCircle, faMusic, faSearch, faUser, faWifi } from "@fortawesome/free-solid-svg-icons";
import { faComment as farComment } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

function Friends() {

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
        <h1 className="screen-header__title">Friends</h1>
        <div className="screen-header__icons">
          <span><FontAwesomeIcon icon={faSearch} size='lg' /></span>
          <span><FontAwesomeIcon icon={faMusic} size='lg' /></span>
          <span><FontAwesomeIcon icon={faCog} size='lg' /></span>
        </div>
      </header>

      <a className="friends-display-link">
        <span><FontAwesomeIcon icon={faInfoCircle} /></span>
        Friends' Names Display
        <span><FontAwesomeIcon icon={faChevronRight} size='xs' /></span>
      </a>

      <main className="friends-screen">
        <div className="user-component">
          <div className="user-component__column">
            <img
              src={require("kokoa/img/stein_icon2.jpg")}
              className="user-component__avatar user-component__avatar--xl"
            />
            <div className="user-component__text">
              <h4 className="user-component__title">Stein</h4>
            </div>
          </div>
          <div className="user-component__column"></div>
        </div>
        <div className="friends-screen__channel">
          <div className="friends-screen__channel-header">
            <span>Channel</span>
            <FontAwesomeIcon icon={faChevronUp} size='xs' />
          </div>
          <div className="user-component">
            <div className="user-component__column">
              <img
                src={require("kokoa/img/stein_icon2.jpg")}
                className="user-component__avatar user-component__avatar--sm"
              />
              <div className="user-component__text">
                <h4 className="user-component__title user-component__title--not-bold">
                  Channel
                </h4>
              </div>
            </div>
            <div className="user-component__column">
              <div>
                <span>2</span>
                <FontAwesomeIcon icon={faChevronRight} size='xs' />
              </div>
            </div>
          </div>
        </div>
      </main>

      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__btn">
            <Link to='/kokoa/friends' >
              <a className="nav__link">
                <FontAwesomeIcon icon={faUser} size='2x' />
              </a>
            </Link>
          </li>
          <li className="nav__btn">
            <Link to='/kokoa/chats' >
              <a className="nav__link">
                <span className="nav_notification_comment badge">1</span>
                <FontAwesomeIcon icon={farComment} size='2x' />
              </a>
            </Link>
          </li>
          <li className="nav__btn">
            <Link to='/kokoa/find' >
              <a className="nav__link" href="find.html">
                <FontAwesomeIcon icon={faSearch} size='2x' />
              </a>
            </Link>
          </li>
          <li className="nav__btn">
            <Link to='/kokoa/more' >
              <a className="nav__link" href="more.html">
                <span className="nav_notification_ellipsis"></span>
                <FontAwesomeIcon icon={faEllipsisH} size='2x' />
              </a>
            </Link>
          </li>
        </ul>
      </nav>

      <div id="splash-screen">
        <FontAwesomeIcon icon={faComment} />
      </div>

      <div id="no-mobile">
        <span>Your screen is too big</span>
      </div>
    </>
  )
};

export default Friends;
