import { ListProvider } from '../state';
import { Header, ListContainer, ListAddItem } from '../components';

const App = () => {
  return (
    <ListProvider>
      <Header />
      <ListContainer />
      <ListAddItem />
    </ListProvider>
  );
};

export default App;
