import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyles } from "./styles/global";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransctionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false);
  }
  return (
   <>
     <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
     <Dashboard/>
     <Modal 
          isOpen={isNewTransctionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
        >
          <h2>Cadastrar Transação</h2>
      </Modal>
     <GlobalStyles/>
   </>
  );
}
