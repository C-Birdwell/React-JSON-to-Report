export const typeClassName = (value) => {
  let className = '';

  switch (value) {
    case 'DEBUG':
      className = 'list-debug';
      break;
    case 'WARN':
      className = 'list-warn';
      break;
    case 'ERROR':
      className = 'list-error';
      break;
    case 'INFO':
      className = 'list-info';
      break;
    default:
      className = '';
  }

  return className;
};
