import { useContext } from 'react';

import { ListContext } from '../state';
import { ListItem } from './';

const ctaMessage = (
  <p className='cta-add'>Please add a list item or import a file.</p>
);

export const ListContainer = () => {
  const { stateList } = useContext(ListContext);
  const [list, setList] = stateList;

  const listHasItems = list.length > 0;

  const mapList = list.map((val, i) => (
    <ListItem
      name={val.name}
      value={val.value}
      note={val.note}
      key={val.id + i}
      id={val.id}
    />
  ));

  return (
    <div className={`content${listHasItems ? ' list-content' : ''}`}>
      {listHasItems ? mapList : ctaMessage}
    </div>
  );
};
