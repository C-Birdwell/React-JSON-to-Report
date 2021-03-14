import { useState } from 'react';

import { typeClassName } from '../utils';
import { EditContext, EditProvider } from '../state';
import { ListEditItem, ListItemInfo } from './';

export const ListItem = ({ name, value, note, id }) => {
  const [editable, setEditable] = useState(false);

  return (
    <EditContext.Provider value={[editable, setEditable]}>
      <div className={`list-item${editable ? '' : ' ' + typeClassName(value)}`}>
        {editable ? (
          <ListEditItem name={name} value={value} note={note} id={id} />
        ) : (
          <ListItemInfo name={name} value={value} note={note} id={id} />
        )}
      </div>
    </EditContext.Provider>
  );
};
