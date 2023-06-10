import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { message, messageStatus, getMessage } from '../redux/greeting';

const Greeting = () => {
  const randomMessage = useSelector(message);
  const status = useSelector(messageStatus);
  const dispatch = useDispatch();

  const handleRandomMessage = () => {
    dispatch(getMessage());
  };

  useEffect(() => {
    setTimeout(() => {
      if (randomMessage.length === 0) dispatch(getMessage());
    }, 1000);
  });

  return (
    <>
      {status === 'loading' ? (
        <h1>Loading...</h1>
      ) : (
        <div className="container m-5">
          <h2>{randomMessage}</h2>
          <button type="button" className="btn btn-primary" onClick={handleRandomMessage}>
            Random Greeting
          </button>
        </div>
      )}
    </>
  );
};

export default Greeting;
