import { useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import Overlay from './components/Overlay/Overlay';

function App() {

  const [modal, setModal] = useState(false)

  const handleTask = () => {
    setModal(!modal);
  }

  return (
    <>
      {modal ? (
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
      </div>
    </>
  );
}

export default App;