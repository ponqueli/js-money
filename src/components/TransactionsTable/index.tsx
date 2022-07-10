import { useEffect } from "react";
import { api } from "../../services/app";
import { Container } from "./styles";

export function TransactionsTable(){

  useEffect(() => {
    api.get("transactions")
      .then(response => console.log(response.data));
  }, []);

  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de Website</td>
            <td className="deposit">R$ 12.000,00</td>
            <td>Desenvolvimento</td>
            <td>20/05/2020</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">-R$ 12.000,00</td>
            <td>Fixa</td>
            <td>20/05/2020</td>
          </tr>
          <tr>
            <td>Desenvolvimento de Website</td>
            <td className="deposit">R$ 2.000,00</td>
            <td>Desenvolvimento</td>
            <td>10/05/2020</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}