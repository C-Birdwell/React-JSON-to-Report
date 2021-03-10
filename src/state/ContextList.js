import { createContext, useState } from 'react';

export const ContextList = createContext();

export const StateList = (props) => {
  const [item, setItem] = useState([]);
  return <ContextList.Provider>{props.children}</ContextList.Provider>;
};
