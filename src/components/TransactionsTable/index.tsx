import { useEffect, useState } from "react";
import { api } from "../../services/app";
import { Container } from "./styles";

interface Transaction{
  id: number;
  title: string;
  amount: number;
  type: "deposit" | "withdraw";
  category: string;
  createdAt: string;
}

export function TransactionsTable(){
  const [transactions, setTransactions] = useState<Transaction[]>([]);  
  useEffect(() => {
    api.get("transactions")
      .then(response => { setTransactions(response.data.transactions)});
  }, []);

  return(
    <Container>
      {transactions.length > 0 ? (
        <table >
          <thead>
            <tr>
              <th>Título</th>
              <th>Valor</th>
              <th>Categoria</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            { transactions.map( transaction =>(
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>{transaction.amount}</td>
                <td>{transaction.category}</td>
                <td>{transaction.createdAt}</td>
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