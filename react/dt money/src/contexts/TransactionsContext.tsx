import { ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'
import { createContext } from 'use-context-selector'

interface NewTransaction {
  description: string
  type: string
  category: string
  price: number
}

export interface Transaction {
  id: number
  description: string
  type: string
  category: string
  price: number
  createdAt: string
}

interface TransactionContextType {
  transactions: Transaction[]
  fetchTranactions: (query?: string) => Promise<void>
  createNewTransaction: (data: NewTransaction) => Promise<void>
}

export const TransactionContext = createContext<TransactionContextType>(
  {} as TransactionContextType,
)

interface TransactionProviderProps {
  children: ReactNode
}

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function createNewTransaction(data: NewTransaction) {
    const { category, description, price, type } = data
    const response = await api.post('/transactions', {
      category,
      description,
      price,
      type,
      createdAt: new Date(),
    })
    setTransactions((state) => [response.data, ...state])
  }

  async function fetchTranactions(query?: string) {
    const response = await api.get('/transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })

    setTransactions(response.data)
  }

  useEffect(() => {
    fetchTranactions()
  }, [])

  return (
    <TransactionContext.Provider
      value={{ transactions, fetchTranactions, createNewTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  )
}
