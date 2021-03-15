import { useContext, useState, useEffect, useRef } from 'react';
import Select from 'react-select';
import { v4 as uuidv4 } from 'uuid';
import {
  faEraser,
  faTrash,
  faCheckCircle,
  faPlusCircle,
} from '@fortawesome/free-solid-svg-icons';

import { EditContext, ListContext } from '../state';
import { statusOptions } from '../data';
import { Button } from './subComponents';

export const ListAddItem = () => {
  const { stateList, stateAddList } = useContext(ListContext);
  const [list, setList] = stateList;
  const [addListItem, setAddListItem] = stateAddList;
  const [editNoteFlag, setEditNoteFlag] = useState(false);
  const [editName, setEditName] = useState('');
  const [editValue, setEditValue] = useState('');
  const [editNote, setEditNote] = useState('');
  const [thisListItem, setThisListItem] = useState({});

  const modal = useRef();

  const handleClickOutside = (e) => {
    if (modal.current.contains(e.target)) {
      return;
    }
    setAddListItem(false);
  };

  const cleanUp = () => {
    setThisListItem({});
    setEditName('');
    setEditValue('');
    setEditNote('');
    setEditNoteFlag(false);
  };

  const _addItem = () => {
    list.length > 0
      ? setList(list.concat(thisListItem))
      : setList([thisListItem]);

    cleanUp();
    setAddListItem(false);
  };

  useEffect(() => {
    addListItem
      ? document.addEventListener('mousedown', handleClickOutside)
      : document.removeEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      cleanUp();
    };
  }, [addListItem]);

  useEffect(() => {
    setThisListItem({
      name: editName,
      value: editValue,
      note: editNote,
      id: uuidv4(),
    });

    return () => {};
  }, [editName, editValue, editNote]);

  const addNote = () => {
    if (editNoteFlag || editNote) {
      return (
        <div className='col-1'>
          <p className='label'>Note:</p>
          <textarea
            value={editNote}
            onChange={(e) => setEditNote(e.target.value)}
            className='list-item-note'
          />
          <div className='row'>
            <div className='col-1'>
              <Button
                func={() => {
                  setEditNoteFlag(false);
                  setEditNote('');
                }}
                color='red'
                text='Delete Note'
                icon={faTrash}
              />
            </div>
            {editNote.length > 0 && (
              <div className='col-1'>
                <Button
                  func={() => setEditNote('')}
                  color='yellow'
                  text='Clear Note'
                  icon={faEraser}
                />
              </div>
            )}
          </div>
        </div>
      );
    }
    return (
      <Button
        func={() => setEditNoteFlag(true)}
        color='teal'
        text='Add Note'
        icon={faPlusCircle}
      />
    );
  };

  const inputs = () => (
    <div className='row push-20'>
      <div className='col-1' style={{ paddingRight: '2.5%' }}>
        <p className='label'>Name:</p>
        <input
          className='list-item-name'
          value={editName}
          onChange={(e) => setEditName(e.target.value)}
          type='text'
        />
      </div>
      <div className='col-1' style={{ paddingLeft: '2.5%' }}>
        <p className='label'>Value:</p>
        <div className='select'>
          <Select
            options={statusOptions}
            onChange={(e) => setEditValue(e.value)}
          />
        </div>
      </div>
    </div>
  );

  if (addListItem) {
    return (
      <div className='add-list-item-wrapper'>
        <div className='add-list-item-container' ref={modal}>
          {inputs()}
          <div className='col-3'>
            <div className='col-1 push-20'>{addNote()}</div>
          </div>
          <div className='col-1'>
            {editName && editValue && (
              <Button
                func={() => _addItem()}
                color='green'
                text='Add Item'
                icon={faCheckCircle}
              />
            )}
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
