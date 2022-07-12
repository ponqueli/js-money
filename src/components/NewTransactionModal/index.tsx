import { FormEvent, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useTransactions } from '../../hooks/useTransactions';
import Modal from "react-modal";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import 'react-toastify/dist/ReactToastify.css';
import incomeImg from '../../assets/entrada.svg';
import outcomeImg from '../../assets/saida.svg';
import closeImg from '../../assets/fechar.svg';

interface NewTransactionModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState<'deposit' | 'withdraw'>('deposit');
  const {createTransaction} = useTransactions();

  function resetForm() {
    setTitle('');
    setAmount(0);
    setCategory('');
    setType('deposit');
  }

  function isValidateForm() {
    if(title.trim().length === 0) return false;
    if(amount <= 0) return false;
    if(category.trim().length === 0) return false;
    return true;
  }

  function handleCreateNewTransaction(event:FormEvent) {
    event.preventDefault();
    createTransaction({ 
      title,
      amount,
      category,
      type,
    });
    
    resetForm();
    onRequestClose();
    toast.success('Transação criada com sucesso!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

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

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Nova transação</h2>
        <input 
          type="text" 
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input 
          type="number" 
          placeholder="Valor"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor="green"
            >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor="red"
            >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input 
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <button 
          type="submit"
          disabled={!isValidateForm()}
          >
          Cadastrar
        </button>
      </Container>
    </Modal>
  );
}