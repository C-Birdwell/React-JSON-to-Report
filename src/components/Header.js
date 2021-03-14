import { useContext } from 'react';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import { ListContext } from '../state';
import { ButtonAddItem, ButtonImport } from './';
import { Button } from './subComponents';

export const Header = () => {
  const { stateList } = useContext(ListContext);
  const [list, setList] = stateList;

  return (
    <header>
      <div className='row'>
        <div className='col-1'>
          <ButtonImport />
        </div>
        <div className='col-1'>
          <ButtonAddItem />
        </div>
        <div className='col-1'>
          {list.length > 0 && (
            <Button
              func={() => alert('Sending JSON')}
              color='green'
              text='Send'
              icon={faPaperPlane}
            />
          )}
        </div>
      </div>
    </header>
  );
};
