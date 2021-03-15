import { useContext } from 'react';

import { EditContext, ListContext } from '../state';
import { Button } from './subComponents';
import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const infoData = (label, val, style) => (
  <div className='col-1' style={style}>
    <p className='label'>{label}:</p>
    <p className='list-item-keyval'>{val}</p>
  </div>
);

export const ListItemInfo = ({ name, value, note, id }) => {
  const { stateList } = useContext(ListContext);
  const [list, setList] = stateList;
  const [editable, setEditable] = useContext(EditContext);

  const _delete = () => {
    setList(list.filter((lis) => lis.id !== id));
  };

  return (
    <>
      <div className='row push-20'>
        {infoData('Name', name, { paddingRight: '2.5%' })}
        {infoData('Value', value, { paddingLeft: '2.5%' })}
      </div>
      <div className='push-20'> {note && infoData('Note', note)}</div>
      <div className='row'>
        <div className='col-1 pos-start'>
          <Button
            func={() => setEditable(true)}
            color='blue'
            text='Edit'
            icon={faPencilAlt}
          />
        </div>
        <div className='col-1 pos-end'>
          <Button
            func={() => _delete()}
            color='red'
            text='Delete'
            icon={faTrashAlt}
          />
        </div>
      </div>
    </>
  );
};
