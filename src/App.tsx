import './App.scss';
import { useAppSelector } from './app/hooks';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import Overlay from './components/Overlay/Overlay';
import List from './containers/List/List';

function App() {
  const modalToggle = useAppSelector((state) => state.modal)

  return (
    <>
      {modalToggle.modal ? (
        (
          <>
            <Overlay />
            <Modal/>
          </>
        )
      ) : null
      }

      <div className="App">
        <Header />
        <List />
      </div>
    </>
  );
}

export default App;