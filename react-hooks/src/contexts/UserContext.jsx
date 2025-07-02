import { createContext, useState } from 'react';

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: 'John Doe',
    age: 30
  });

  const value = {
    user,
    setUser
  };
  
  return (
    <UserContext.Provider value={value}>
      {/* Other components can go here */}
      {children}
    </UserContext.Provider>
  );
}