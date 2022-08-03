import { faAddressBook, faBatteryFull, faBolt, faChevronRight, faCog, faEllipsisH, faEnvelope, faFingerprint, faHeart, faQrcode, faSearch, faWifi } from "@fortawesome/free-solid-svg-icons";
import { faComment as farComment, faUser as farUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


function Find() {

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
        <h1 className="screen-header__title">Find</h1>
        <div className="screen-header__icons">
          <span><FontAwesomeIcon icon={faSearch} size='lg' /></span>
          <span><FontAwesomeIcon icon={faCog} size='lg' /></span>
          <span className="screen-header__icons_cog_new"></span>
        </div>
      </header>

      <main className="main-screen">
        <div className="icons-row">
          <div className="icons-row__icon">
            <FontAwesomeIcon className="fa-icon" icon={faQrcode} />
            <span>QR Code</span>
          </div>
          <div className="icons-row__icon">
            <FontAwesomeIcon className="fa-icon" icon={faAddressBook} />
            <span>Add by Contacts</span>
          </div>
          <div className="icons-row__icon">
            <FontAwesomeIcon className="fa-icon" icon={faFingerprint} />
            <span>Add by ID</span>
          </div>
          <div className="icons-row__icon">
            <FontAwesomeIcon className="fa-icon" icon={faEnvelope} />
            <span>Invite</span>
          </div>
        </div>
        <div className="recommended-friends">
          <h6 className="recommended-friends__title">Recommended Friends</h6>
          <span>You have no recommended friends.</span>
        </div>
        <div className="open-chat">
          <div className="open-chat__header">
            <h4>Open Chat</h4>
            <span>
              Go to Openchat Home
              <FontAwesomeIcon className="fa-icon" icon={faChevronRight} size='xs' />
            </span>
          </div>
          <div className="open-post">
            <div className="open-post__column">
              <h5 className="open-post__title">#BTS</h5>
              <h6 className="open-post__hashtags">#bts#army#friends</h6>
              <div className="open-post__members">
                <img src={require("kokoa/img/stein_icon2.jpg")} />
                <span className="open-post__member-count">802 members</span>
                <div className="divider"></div>
                <span className="open-post__member-status">Active</span>
              </div>
            </div>
            <div className="open-post__column">
              <div className="open-post__photo">
                <img src={require("kokoa/img/pic_etc.jpg")} />
                <div className="open-post__heart-count">
                  <FontAwesomeIcon className="fa-icon" icon={faHeart} size='xs' />
                  <span>326</span>
                </div>
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
  )
};

export default Find;