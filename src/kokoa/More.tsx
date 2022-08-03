import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar as farCalendar, faComment as farComment, faCommentAlt as farCommentAlt, faUser as farUser } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { faBatteryFull, faBolt, faCog, faEllipsisH, faExclamation, faFileInvoiceDollar, faMusic, faPaintRoller, faQuoteRight, faSearch, faSmileBeam, faUsers, faWifi } from "@fortawesome/free-solid-svg-icons";

function More() {

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
        <h1 className="screen-header__title">More</h1>
        <div className="screen-header__icons">
          <span><FontAwesomeIcon icon={faSearch} size='lg' /></span>
          <span><FontAwesomeIcon icon={faMusic} size='lg' /></span>
          <span>
            <Link to='/kokoa/settings' >
              <a>
                <FontAwesomeIcon className="fa-icon" icon={faCog} size='lg' />
              </a>
            </Link>
          </span>
        </div>
      </header>

      <main className="main-screen more-screen">
        <div className="user-component">
          <div className="user-component__column">
            <img
              src={require("kokoa/img/stein_icon2.jpg")}
              className="user-component__avatar user-component__avatar--xl"
            />
            <div className="user-component__text">
              <h4 className="user-component__title">Stein</h4>
              <h6 className="user-component__subtitle">
                <span>+1 787-666-999</span>
                <FontAwesomeIcon className="fa-icon" icon={faExclamation} />
              </h6>
            </div>
          </div>
          <div className="user-component__column">
            <FontAwesomeIcon className="fa-icon" icon={farCommentAlt} size='2x' />
          </div>
        </div>
        <div className="icons-row">
          <div className="icons-row__icon">
            <FontAwesomeIcon className="fa-icon" icon={farCalendar} />
            <span>Calendar</span>
          </div>
          <div className="icons-row__icon">
            <FontAwesomeIcon className="fa-icon" icon={faSmileBeam} />
            <span>Emoticons</span>
          </div>
          <div className="icons-row__icon">
            <FontAwesomeIcon className="fa-icon" icon={faPaintRoller} />
            <span>Themes</span>
          </div>
          <div className="icons-row__icon">
            <FontAwesomeIcon className="fa-icon" icon={faFileInvoiceDollar} />
            <span>Account</span>
          </div>
        </div>
        <div className="more-suggestions">
          <h4 className="more-suggestions__title">Suggestions</h4>
          <div className="more-suggestions__icons">
            <div className="more-suggestions__icon">
              <div className="more-suggestions__icons-image">
                <FontAwesomeIcon className="fa-icon" icon={faQuoteRight} />
              </div>
              <span className="more-suggestions__icons-text">Kokoa Story</span>
            </div>
            <div className="more-suggestions__icon">
              <div className="more-suggestions__icons-image">
                <FontAwesomeIcon className="fa-icon" icon={faUsers} />
              </div>
              <span className="more-suggestions__icons-text">Kokoa Friends</span>
            </div>
          </div>
        </div>
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
}

export default More;