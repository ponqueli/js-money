import { createContext, useEffect, useState, ReactNode, useContext } from 'react';

interface Transaction{
  id: number;
  title: string;
  amount: string;
  type: "deposit" | "withdraw";
  category: string;
  createdAt: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;
//type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'>;

interface TransactionsProviderProps{
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => void;
  deleteTransaction: (id: number) => void;
}

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }:TransactionsProviderProps) {
  const KEY = '@JSMoney:transactions';
  
  const [transactions, setTransactions] = useState<Transaction[]>([]);  
  
  const generateId = ():number => {
    return transactions.length ? Math.max(...transactions.map(transaction => transaction.id)) + 1 : 1;
  }

  const getSavedTransactions = (key:string): Transaction[] => {
    const transactions = localStorage.getItem(key);
    return transactions ? JSON.parse(transactions) : [];
  }

  useEffect(() => {
    const savedTransactions = getSavedTransactions(KEY);
    setTransactions(savedTransactions);
  }, []);

  function deleteTransaction(id: number){
    const transactionsToNotDelete = transactions.filter(transaction => transaction.id !== id);
    setTransactions(transactionsToNotDelete);
    localStorage.setItem(KEY, JSON.stringify(transactionsToNotDelete));
  }

  const saveTransactionToLocalstorage = (key: string, transaction:Transaction):void => {
    const newTransactions = [
      ...transactions, transaction];
    localStorage.setItem(key, JSON.stringify(newTransactions));
    setTransactions(newTransactions);
  }

  function createTransaction(transactionInput:TransactionInput) {
    const transaction = {
      ...transactionInput,
      id: generateId(),
      createdAt: new Date().toISOString(),
    };

    saveTransactionToLocalstorage(KEY, transaction);
  }

  return (
    <TransactionsContext.Provider 
      value={{transactions, createTransaction, deleteTransaction}}>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions(){
  const context = useContext(TransactionsContext);
  return context;
}