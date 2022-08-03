import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faKissWinkHeart } from '@fortawesome/free-solid-svg-icons';
import { auth } from 'kiwitter/firebaseSetup';

const Navigation = () => {
  const user = auth.currentUser;

  return (
    <>
      <nav className="navigation">
        <ul className="navigation-ulist">
          <li>
            <Link to="" className="navigation-ulist__link">
              <FontAwesomeIcon icon={faKissWinkHeart} color={'#04AAFF'} size="2x" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="profile" className="navigation-ulist__link">
              <FontAwesomeIcon icon={faUser} color={'#04AAFF'} size="2x" />
              <span>
                {(user && user.displayName)
                  ? `${user.displayName}'s Profile`
                  : 'Profile'}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
