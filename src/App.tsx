import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import Overlay from './components/Overlay/Overlay';

function App() {
  return (
    <>
      <Overlay />
      <Modal />
    <div className="App">
      <Header />
    </div>
    </>
  );
}

export default App;