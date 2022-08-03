import { faBatteryFull, faBolt, faWifi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

function Index() {

  const navigate = useNavigate();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate('friends');
  };

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

      <header className="welcome-header">
        <h1 className="welcome-header__title">Welcome to Kokoa Clone</h1>
        <p className="welcome-header__text">
          If you have a kokoa Account, log in with your email or phone number.
        </p>
      </header>

      <form className="login-form" onSubmit={onSubmit} >
        <input name="username" type="text" placeholder="Email or phone number" />
        <input name="password" type="password" placeholder="Password" />
        <input type="submit" value="Log In" />
        <a href="#">Find Kokoa Account or Password</a>
      </form>

      <div id="no-mobile">
        <span>Your screen is too big</span>
      </div>
    </>
  );

};

export default Index;