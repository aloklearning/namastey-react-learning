import { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext({
  loggedInUser: 'Default User',
});

export default function UserContextProvider({ children }) {
  const [userName, setUserName] = useState();
  const contextValue = {
    loggedInUser: userName,
    setUserName,
  };

  useEffect(() => {
    const userInfo = {
      name: 'Alok Kumar',
    };
    setUserName(userInfo.name);
  }, []);

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}

export const userContext = () => {
  const userContext = useContext(UserContext);
  if (!userContext) {
    throw new Error('Incorrect context used. Please check and try again.');
  }

  return userContext;
};
