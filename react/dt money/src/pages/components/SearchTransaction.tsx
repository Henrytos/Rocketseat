import search from '../../assets/imgs/search.png'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { TransactionContext } from '../../contexts/TransactionsContext'
import { useContextSelector } from 'use-context-selector'

export function SearchTransaction() {
  const searchFormSchema = zod.object({
    query: zod.string(),
  })

  type SearchFormInputs = zod.infer<typeof searchFormSchema>

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  const fetchTranactions = useContextSelector(TransactionContext, (context) => {
    return context.fetchTranactions
  })

  async function handleSearchTransaction(data: SearchFormInputs) {
    fetchTranactions(data.query)
  }
  return (
    <form
      action=""
      className="flex gap-6 justify-between"
      onSubmit={handleSubmit(handleSearchTransaction)}
    >
      <input
        type="text"
        className="grow bg-gray-900 rounded py-3 px-4 outline-none text-gray-500 "
        placeholder="Busque uma transação"
        {...register('query')}
      />
      <button
        type="submit"
        className="
        text-green-300 border-[1px] border-green-300 py-3 px-7 rounded
      cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed
        "
        disabled={isSubmitting}
      >
        <img src={search} alt="buscar" className="inline pr-1" />
        <span>Buscar</span>
        <span>hellowolrd</span>
      </button>
    </form>
  )
}
