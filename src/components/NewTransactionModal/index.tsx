import incomeImg from '../../assets/entrada.svg';
import outcomeImg from '../../assets/saida.svg';
import closeImg from '../../assets/fechar.svg';
import Modal from "react-modal";
import { Container, TransactionTypeContainer } from "./styles";

interface NewTransactionModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
  return(
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button 
        className='react-modal-close'
        type='button' 
        onClick={onRequestClose}
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Container>
        <h2>Nova transação</h2>
        <input 
          type="text" 
          placeholder="Título"
        />
        <input 
          type="number" 
          placeholder="Valor"
        />

        <TransactionTypeContainer>
          <button
            type="button"
            >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </button>
          <button
            type="button"
            >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </button>
        </TransactionTypeContainer>

        <input 
          placeholder="Categoria"
        />

        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  );
}