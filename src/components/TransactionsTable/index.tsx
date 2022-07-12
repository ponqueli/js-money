import { useTransactions } from "../../hooks/useTransactions";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {FiTrash} from 'react-icons/fi';
import { Container } from "./styles";

export function TransactionsTable(){
  const { transactions, deleteTransaction } = useTransactions();

  function handleRemoveTransaction(id: number){
    deleteTransaction(id);
    toast.success('Transação excluída com sucesso!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  function getTotalItensDescribed(){
    if(transactions.length === 0) return ``;
    return `${transactions.length} itens`;
  }

  return(
    <Container>
      {transactions.length > 0 ? (
        <table >
          <thead>
            <tr>
              <th className="short-text">
                <p>Listagem</p>
                <p>{ getTotalItensDescribed() }</p>
              </th>
              <th className="hide-on-media">Título</th>
              <th className="hide-on-media">Valor</th>
              <th className="hide-on-media">Categoria</th>
              <th className="hide-on-media">Data</th>
              <th className="hide-on-media"></th>
            </tr>
          </thead>
          <tbody>
            { transactions.map( transaction =>(
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  { new Intl.NumberFormat('pt-BR', { 
                      style: 'currency', 
                      currency: 'BRL'
                    }).format(transaction.amount)}
                </td>
                <td className="inline-media-screen-left">{transaction.category}</td>
                <td className="inline-media-screen-right">
                  { new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt)) }
                </td>
                <td>
                  <button type="button" id="remove-transaction-button" onClick={() => handleRemoveTransaction(transaction.id)}>
                    <FiTrash size={16}/>
                  </button>
                </td>
              </tr>  
            ))}
          </tbody>
        </table>
      ) : (
        <p>Nenhuma transação cadastrada</p>
      )}
    </Container>
  );
}