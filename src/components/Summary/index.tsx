import { useTransactions } from "../../hooks/useTransactions";
import incomeImg from "../../assets/entrada.svg";
import outcomeImg from "../../assets/saida.svg";
import totalImg from "../../assets/total.svg";
import { CardContainer, CardContent, CardHeader, Container } from "./styles";

export function Summary(){
  const {transactions} = useTransactions();
  const summary = transactions.reduce((accumulator, transaction) => {
    if(transaction.type==='deposit'){
      accumulator.deposits += Number(transaction.amount);
      accumulator.total += Number(transaction.amount);
    }else{
      accumulator.withdrawals += Number(transaction.amount);
      accumulator.total -= Number(transaction.amount);
    }
  return accumulator;
  }, {
    deposits:0,
    withdrawals:0,
    total:0
  });

  return (
    <Container>
      <CardContainer>
        <CardHeader>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </CardHeader>
        <CardContent>
          <strong>
            {
              new Intl.NumberFormat('pt-BR',{
                style:'currency',
                currency:'BRL'
              }).format(summary.deposits)
            }
          </strong>
        </CardContent>
      </CardContainer>

      <CardContainer>
        <CardHeader>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </CardHeader>
        <CardContent>
          <strong>
            { 
              new Intl.NumberFormat('pt-BR', { 
                style: 'currency', 
                currency: 'BRL'
              }).format(summary.withdrawals)
            }
          </strong>
        </CardContent>
      </CardContainer>

      <CardContainer 
        className="highlight-background"
        isPositive={summary.total >= 0}
        >
        <CardHeader>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </CardHeader>
        <CardContent>
          <strong>
          { 
            new Intl.NumberFormat('pt-BR', { 
              style: 'currency', 
              currency: 'BRL'
            }).format(summary.total)
          }
          </strong>
        </CardContent>
      </CardContainer>
    </Container>
  );
}