import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";

export function TransactionsTable(){
  const { transactions } = useTransactions();

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