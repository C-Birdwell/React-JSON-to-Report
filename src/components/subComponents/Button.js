import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Button = ({ text, func, icon, color }) => {
  let backgroundColor = '';
  let lightText = false;

  switch (color) {
    case 'red':
      backgroundColor = '#bb0000';
      lightText = true;
      break;

    case 'blue':
      backgroundColor = '#4072ff';
      lightText = true;
      break;

    case 'yellow':
      backgroundColor = '#fbff00';
      break;

    case 'teal':
      backgroundColor = '#00f3ff';
      break;

    case 'green':
      backgroundColor = '#009e00';
      lightText = true;
      break;

    default:
      backgroundColor = '#fff';
  }

  return (
    <button
      className={`button${lightText ? ' light-text' : ''}`}
      onClick={func}
      style={{ backgroundColor }}
    >
      <div className='row'>
        <div className='col-1'>
          <FontAwesomeIcon icon={icon} />
        </div>
        <div className='col-4 center'>
          <p>{text}</p>
        </div>
      </div>
    </button>
  );
};
