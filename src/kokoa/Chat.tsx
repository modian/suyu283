import { faPlusSquare as farPlusSquare, faSmileWink as farSmileWink } from "@fortawesome/free-regular-svg-icons";
import { faAngleLeft, faArrowUp, faBars, faBatteryFull, faBolt, faSearch, faWifi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Chat() {

  return (
    <>
      <body id="chat-screen">
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
            <Link to='/kokoa/chats' >
              <a>
                <FontAwesomeIcon icon={faAngleLeft} size='3x' />
              </a>
            </Link>
          </div>
          <div className="alt-header__column">
            <h1 className="alt-header__title">Stein</h1>
          </div>
          <div className="alt-header__column">
            <span><FontAwesomeIcon icon={faSearch} size='lg' /></span>
            <span><FontAwesomeIcon icon={faBars} size='lg' /></span>
          </div>
        </header>

        <main className="main-screen main-chat">
          <div className="chat__timestamp">Tuesday, May 17, 2022</div>

          <div className="message-row">
            <img src={require("kokoa/img/stein_icon2.jpg")} />
            <div className="message-row__content">
              <span className="message_author">Stein</span>
              <div className="message_info">
                <span className="message__bubble">Hi!</span>
                <span className="message__time">21:27</span>
              </div>
            </div>
          </div>
          <div className="message-row message-row--own">
            <div className="message-row__content">
              <div className="message_info">
                <span className="message__bubble">Hi nice to meet you</span>
                <span className="message__time">21:27</span>
              </div>
            </div>
          </div>
        </main>

        <form className="reply">
          <div className="reply__column">
            <span><FontAwesomeIcon icon={farPlusSquare} size='lg' /></span>
          </div>
          <div className="reply__column">
            <input type="text" placeholder="Write a message..." />
            <span><FontAwesomeIcon icon={farSmileWink} size='lg' /></span>
            <button>
              <span><FontAwesomeIcon icon={faArrowUp} /></span>
            </button>
          </div>
        </form>

        <div id="no-mobile">
          <span>Your screen is too big</span>
        </div>

      </body>
    </>
  );
};

export default Chat;