import React, { useState } from 'react';
import { v4 } from 'uuid';
import { db, storage } from 'firebaseSetup';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { ref, uploadString, getDownloadURL } from 'firebase/storage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

const NweetFactory = ({ userObj }: any) => {
  const [nweet, setNweet] = useState('');
  const [attachment, setAttachment] = useState('');

  const onSubmit = async (event: any) => {
    event.preventDefault();
    let attachmentURL = '';

    if (attachment !== '') {
      const attachmentRef = ref(storage, `${userObj.uid}/${v4()}`);
      const response = await uploadString(
        attachmentRef,
        attachment,
        'data_url'
      );
      attachmentURL = await getDownloadURL(response.ref);
    }

    try {
      const docRef = await addDoc(collection(db, 'nweets'), {
        text: nweet,
        createdAt: Timestamp.now(),
        creatorId: userObj.uid,
        attachmentURL,
      });
    } catch (error) {
      console.error('Error adding document:', error);
    }
    if (nweet !== '') {
      setNweet('');
      setAttachment('');
    }
  };

  const onChange = (event: any) => {
    const {
      target: { value },
    } = event;
    setNweet(value);
  };

  const onFileChange = (event: any) => {
    const {
      target: { files },
    } = event;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent: any) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setAttachment(result);
    };
    reader.readAsDataURL(theFile);
  };

  const onClearAttachment = () => setAttachment('');

  return (
    <form onSubmit={onSubmit} className="nweet-factory-form">
      <div className="nweet-factory-input__container">
        <input
          value={nweet}
          onChange={onChange}
          type="text"
          placeholder="What's on your mind?"
          maxLength={120}
          className="nweet-factory-input__input"
        />
        <input
          type="submit"
          value="&rarr;"
          className="nweet-factory-input__arrow"
        />
      </div>
      <label htmlFor="attach-file" className="nweet-factory-input__label">
        <span>Add photos</span>
        <FontAwesomeIcon icon={faPlus} />
      </label>
      <input
        type="file"
        accept="image/*"
        onChange={onFileChange}
        id="attach-file"
        style={{
          opacity: 0,
        }}
      />
      {attachment && (
        <div className="nweet-factory-form__attachment">
          <img
            src={attachment}
            style={{
              backgroundImage: attachment,
            }}
          />
          <div
            className="nweet-factory-form__attachment__clear"
            onClick={onClearAttachment}
          >
            <span>Remove</span>
            <FontAwesomeIcon icon={faTimes} />
          </div>
        </div>
      )}
    </form>
  );
};

export default NweetFactory;
