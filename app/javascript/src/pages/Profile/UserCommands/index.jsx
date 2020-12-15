import React, { useContext, useEffect } from 'react';

import CurrentUserContext from '../context';

const UserCommands = () => {
  const { currentUser, updateCurrentUser } = useContext(CurrentUserContext);

  useEffect(
    updateCurrentUser,
    [],
  );

  const getCurrentUserCommands = () => {
    if (!currentUser) {
      return;
    }

    console.log('');
  };

  useEffect(
    getCurrentUserCommands,
    [currentUser],
  );

  return (
    <div>UserCommands</div>
  );
};

export default UserCommands;
