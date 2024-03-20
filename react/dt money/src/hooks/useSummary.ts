import { useContextSelector } from 'use-context-selector'
import { TransactionContext } from '../contexts/TransactionsContext'

export function useSummary() {
  const transactions = useContextSelector(TransactionContext, (context) => {
    return context.transactions
  })

  const summary = transactions.reduce(
    (acum, transaction) => {
      if (transaction.type === 'income') {
        acum.income += transaction.price
        acum.total += transaction.price
      } else {
        acum.outcome += transaction.price
        acum.total -= transaction.price
      }
      return acum
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    },
  )

  return summary
}
