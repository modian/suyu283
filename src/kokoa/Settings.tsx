import { faAngleLeft, faBatteryFull, faBolt, faBullhorn, faEllipsisH, faFlask, faInfoCircle, faSearch, faWifi } from "@fortawesome/free-solid-svg-icons";
import { faCalendar as farCalendar, faComment as farComment, faCommentAlt as farCommentAlt, faUser as farUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Settings() {

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

      <header className="alt-header">
        <div className="alt-header__column">
          <Link to='/kokoa/more' >
            <a>
              <FontAwesomeIcon icon={faAngleLeft} size='3x' />
            </a>
          </Link>
        </div>
        <div className="alt-header__column">
          <h1 className="alt-header__title">Settings</h1>
        </div>
        <div className="alt-header__column">
          <span><FontAwesomeIcon icon={faSearch} size='lg' /></span>
        </div>
      </header>

      <main className="main-screen">
        <ul className="settings-list">
          <li className="settings__setting">
            <div className="settings__setting-column">
              <FontAwesomeIcon className="fa-icon" icon={faBullhorn} />
              <span>Notices</span>
            </div>
            <div className="settings__setting-column"></div>
          </li>
          <li className="settings__setting">
            <div className="settings__setting-column">
              <FontAwesomeIcon className="fa-icon" icon={faFlask} />
              <span>Kokoa Lab</span>
            </div>
            <div className="settings__setting-column"></div>
          </li>
          <li className="settings__setting">
            <div className="settings__setting-column">
              <FontAwesomeIcon className="fa-icon" icon={faInfoCircle} />
              <span>Version</span>
            </div>
            <div className="settings__setting-column">Latest Version</div>
          </li>
        </ul>
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
                <FontAwesomeIcon icon={farComment} size='2x' />
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

export default Settings;