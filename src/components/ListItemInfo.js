import { useContext } from 'react';

import { EditContext, ListContext } from '../state';
import { Button } from './subComponents';
import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const noteSection = (note) => (
  <div className='col-3'>
    <p className='label'>Note:</p>
    <p>{note}</p>
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
        <div className='col-1'>
          <p className='push-20 label'>Name:</p>
          <p>{name}</p>
        </div>
        <div className='col-1'>
          <p className='push-20 label'>Value:</p>
          <p>{value}</p>
        </div>
      </div>
      {note && noteSection(note)}
      <div className='row '>
        <div className='col-1'>
          <Button
            func={() => setEditable(true)}
            color='blue'
            text='Edit'
            icon={faPencilAlt}
          />
        </div>
        <div className='col-1'>
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
