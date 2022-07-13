import React, { useEffect, useState } from 'react';
import { auth, db } from 'firebaseSetup';
import { updateProfile } from 'firebase/auth';
import { collection, getDocs, query, where, orderBy } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

interface ProfileProps {
  userObj: any;
  refreshUser: any;
}

const Profile = ({ userObj, refreshUser }: ProfileProps) => {
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
  const navigate = useNavigate();

  const onLogOutClick = () => {
    auth.signOut();
    navigate('/');
  };

  // const getMyNweets = async () => {
  //   const q = query(
  //     collection(db, 'nweets'),
  //     where('creatorId', '==', userObj.uid),
  //     orderBy('createdAt')
  //   );
  //   const querySnapshot = await getDocs(q);
  //   querySnapshot.forEach((doc) => {
  //     console.log(doc.id, ' => ', doc.data());
  //   });
  // };

  // useEffect(() => {
  //   getMyNweets();
  // }, []);

  const onChange = (event: any) => {
    const {
      target: { value },
    } = event;
    setNewDisplayName(value);
  };

  const onSubmit = async (event: any) => {
    event.preventDefault();
    if (userObj.displayName !== newDisplayName) {
      const currUser: any = auth.currentUser;
      await updateProfile(currUser, { displayName: newDisplayName });
      refreshUser();
    }
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit} className="profileForm">
        <input
          onChange={onChange}
          type="text"
          placeholder="Display name"
          value={newDisplayName}
          autoFocus
          className="formInput"
        />
        <input
          type="submit"
          value="Update Profile"
          style={{
            marginTop: 10,
          }}
          className="formBtn"
        />
      </form>
      <span className="formBtn cancelBtn logOut" onClick={onLogOutClick}>
        Log Out
      </span>
    </div>
  );
};

export default Profile;
