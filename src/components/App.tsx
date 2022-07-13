import React, { useEffect, useState } from 'react';
import AppRouter from 'components/Router';
import { auth } from 'firebaseSetup';
import { onAuthStateChanged, updateProfile } from 'firebase/auth';

export interface IUserObject {
  displayName: string | null;
  uid: string;
  updateProfile: any;
}

function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState<IUserObject | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args: any) =>
            updateProfile(user, { displayName: user.displayName }),
        });
      } else {
        setUserObj(null);
      }
      setInit(true);
    });
  }, []);

  const refreshUser = () => {
    const user = auth.currentUser;
    if (user) {
      setUserObj({
        displayName: user.displayName,
        uid: user.uid,
        updateProfile: (args: any) =>
          updateProfile(user, { displayName: user.displayName }),
      });
    }
  };

  return (
    <>
      {init ? (
        <AppRouter
          isLoggedIn={Boolean(userObj)}
          userObj={userObj}
          refreshUser={refreshUser}
        />
      ) : (
        'Initializing...'
      )}
      <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </>
  );
}

export default App;
