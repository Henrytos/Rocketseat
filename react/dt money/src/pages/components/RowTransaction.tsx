import { Transaction } from '../../contexts/TransactionsContext'
import { formaterCurrency, formaterDate } from '../../utils/formater'

export function RowTransaction({ transaction }: { transaction: Transaction }) {
  return (
    <tr className="h-16 text-gray-300 bg-gray-700 ">
      <td className=" pl-8" width="50%">
        {transaction.description}
      </td>
      <td
        className={`${
          transaction.type === 'income' ? 'text-green-300' : 'text-red-400'
        }`}
      >
        {formaterCurrency.format(transaction.price)}
      </td>
      <td>{transaction.type}</td>
      <td>{formaterDate.format(new Date(transaction.createdAt))}</td>
    </tr>
  )
}
