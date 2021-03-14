import { createContext, useState } from 'react';

export const ListContext = createContext();

export const ListProvider = (props) => {
  const [list, setList] = useState([]);
  const [addListItem, setAddListItem] = useState(false);
  //const [importWarning, setImportWarning] = useState(false);
  //const [loading, setLoading] = useState(false);
  return (
    <ListContext.Provider
      value={{
        stateList: [list, setList],
        stateAddList: [addListItem, setAddListItem],
        // stateImportWarning: [importWarning, setImportWarning],
      }}
    >
      {props.children}
    </ListContext.Provider>
  );
};
