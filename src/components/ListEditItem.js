import { useContext, useState, useEffect } from 'react';
import Select from 'react-select';
import {
  faBan,
  faEraser,
  faTrash,
  faTrashAlt,
  faCheckCircle,
  faPlusCircle,
} from '@fortawesome/free-solid-svg-icons';

import { EditContext, ListContext } from '../state';
import { statusOptions } from '../data';
import { Button } from './subComponents';

export const ListEditItem = ({ name, value, note, id }) => {
  const { stateList } = useContext(ListContext);
  const [list, setList] = stateList;
  const [editable, setEditable] = useContext(EditContext);
  const [editName, setEditName] = useState(name);
  const [editValue, setEditValue] = useState(value);
  const [editNote, setEditNote] = useState(note);
  const [editNoteFlag, setEditNoteFlag] = useState(note ? true : false);
  const [thisListItem, setThisListItem] = useState({ name, value, note, id });

  useEffect(() => {
    setThisListItem({ name: editName, value: editValue, note: editNote, id });

    return () => setThisListItem({ name, value, note, id });
  }, []);

  useEffect(() => {
    setThisListItem({ name: editName, value: editValue, note: editNote, id });

    return () => setThisListItem({ name, value, note, id });
  }, [editName, editValue, editNote]);

  const findDefault = statusOptions.filter((option) => option.value === value);
  const defaultValue =
    statusOptions[
      statusOptions.findIndex((option) => option.value === findDefault[0].value)
    ];

  const _update = () => {
    setEditable(false);
    setList(
      list.map((lis) => {
        if (lis.id !== thisListItem.id) return lis;
        return thisListItem;
      })
    );
  };

  const _delete = () => {
    setEditable(false);
    setList(list.filter((lis) => lis.id !== thisListItem.id));
  };

  const addNote = () => {
    if (note || editNoteFlag || editNote) {
      return (
        <>
          <p>Note:</p>
          <textarea
            value={editNote}
            onChange={(e) => setEditNote(e.target.value)}
            className='list-item-note'
          />
          <div className='row push-40'>
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
            <div className='col-1'>
              <Button
                func={() => setEditNote('')}
                color='yellow'
                text='Clear Note'
                icon={faEraser}
              />
            </div>
          </div>
        </>
      );
    }
    return (
      <div className='col-1 push-40'>
        <Button
          func={() => setEditNoteFlag(true)}
          color='teal'
          text='Add Note'
          icon={faPlusCircle}
        />
      </div>
    );
  };

  return (
    <>
      <div className='row push-40'>
        <div className='col-1'>
          <p>Name:</p>
          <input
            className='list-item-name'
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            type='text'
          />
        </div>
        <div className='col-1'>
          <p>Value:</p>
          <Select
            options={statusOptions}
            defaultValue={defaultValue}
            onChange={(e) => setEditValue(e.value)}
          />
        </div>
      </div>
      <div className='col-3'>
        {addNote(note, setEditNote, editNoteFlag, setEditNoteFlag)}
      </div>

      <div className='row'>
        <div className='col-1'>
          <Button
            func={() => setEditable(false)}
            color='yellow'
            text='Cancel'
            icon={faBan}
          />
        </div>

        <div className='col-1'>
          <Button
            func={() => _update()}
            color='green'
            text='Update'
            icon={faCheckCircle}
          />
        </div>
      </div>
    </>
  );
};
