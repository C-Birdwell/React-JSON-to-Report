import { useContext } from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { ListContext } from '../state';
import { Button } from './subComponents';

export const ButtonAddItem = () => {
  const { stateAddList } = useContext(ListContext);
  const [addListItem, setAddListItem] = stateAddList;

  return (
    <Button
      func={() => setAddListItem(true)}
      color='teal'
      text='Add Item'
      icon={faPlus}
    />
  );
};
