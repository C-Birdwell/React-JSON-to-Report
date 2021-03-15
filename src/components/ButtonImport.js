import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

import { Button } from './subComponents';
import { ListContext } from '../state';

export const ButtonImport = () => {
  const { stateList } = useContext(ListContext);
  const [list, setList] = stateList;

  const requestFile = () => {
    const fetchData = async () => {
      const result = await axios('/data/example.json');
      let convertData = [];
      for (const [key, value] of Object.entries(result.data)) {
        convertData.push({ id: uuidv4(), name: key, value, note: '' });
      }
      setList(convertData);
    };
    fetchData();
  };

  return (
    <Button
      func={() => requestFile()}
      color='blue'
      text='Import'
      icon={faDownload}
    />
  );
};
