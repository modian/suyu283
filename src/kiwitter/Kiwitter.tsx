import React, { useEffect, useState } from 'react';
import { auth } from 'kiwitter/firebaseSetup';
import { onAuthStateChanged, updateProfile } from 'firebase/auth';
import { Route, Routes } from 'react-router-dom';
import Auth from 'kiwitter/routes/Auth';
import Home from 'kiwitter/routes/Home';
import Profile from 'kiwitter/routes/Profile';
import Navigation from 'kiwitter/components/Navigation';
import 'kiwitter/css/styles.css';

function Kiwitter() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [displayName, setDisplayName] = useState<string | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        updateProfile(user, { displayName: user.displayName });
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  const refreshUser = () => {
    const user = auth.currentUser;
    if (user)
      setDisplayName(user.displayName);
  };

  return (
    <>
      <div className='kiwitter-body'>
        {init ? (
          <Routes>
            {isLoggedIn ? (
              <Route element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path='profile' element={<Profile refreshUser={refreshUser} />} />
              </Route>
            ) : (
              <Route index element={<Auth />} />
            )}
          </Routes>
        ) : (
          'Initializing...'
        )
        }
        <footer className='kiwitter-footer'>&copy; {new Date().getFullYear()} Kiwitter</footer>
      </div>
    </>
  );
}

export default Kiwitter;
