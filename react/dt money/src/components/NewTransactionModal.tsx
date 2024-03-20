import { Controller, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Dialog } from '@radix-ui/themes'
import { useContextSelector } from 'use-context-selector'
import { TransactionContext } from '../contexts/TransactionsContext'

export function NewTransactionModal() {
  const createNewTransaction = useContextSelector(
    TransactionContext,
    (context) => {
      return context.createNewTransaction
    },
  )

  const newTransactionFormSchema = zod.object({
    description: zod.string(),
    price: zod.number().min(0),
    category: zod.string(),
    type: zod.enum(['income', 'outcome']),
  })
  type newTransactionFormInputs = zod.infer<typeof newTransactionFormSchema>

  const { register, handleSubmit, reset, control } =
    useForm<newTransactionFormInputs>({
      resolver: zodResolver(newTransactionFormSchema),
      defaultValues: {
        type: 'income',
        category: '',
        description: '',
        price: 0,
      },
    })

  function handleNewTransactionModal(data: newTransactionFormInputs) {
    createNewTransaction(data)
    reset()
  }

  const InputStyle =
    '    bg-gray-900 rounded py-3 px-4 outline-none text-gray-500 w-full  placeholder:text-gray-500'
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button className="w-auto h-auto font-bold bg-green-500 px-5 py-3 rounded cursor-pointer">
          Nova Transação
        </Button>
      </Dialog.Trigger>

      <Dialog.Content
        style={{ maxWidth: 450 }}
        className="bg-zinc-800 text-white px-10 py-10 rounded-md relative"
      >
        <Dialog.Close>
          <Button className="text-2xl absolute right-3 top-4">X</Button>
        </Dialog.Close>

        <h2 className="text-white font-bold text-2xl pb-8">Nova transação</h2>
        <form
          action=""
          className="flex flex-col gap-4"
          onSubmit={handleSubmit(handleNewTransactionModal)}
        >
          <input
            className={InputStyle}
            type="text"
            placeholder="Descrição"
            {...register('description')}
            required
          />
          <input
            className={InputStyle}
            type="text"
            placeholder="Preço"
            {...register('price', { valueAsNumber: true })}
            required
          />
          <input
            className={InputStyle}
            type="text"
            placeholder="Categoria"
            {...register('category')}
            required
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              console.log(field)
              return (
                <select {...field} className={InputStyle}>
                  <option value="income">Entrada</option>
                  <option value="outcome">Saída</option>
                </select>
              )
            }}
          />

          <Dialog.Close>
            <Button
              className="w-full bg-green-500  py-7 rounded cursor-pointer"
              type="submit"
            >
              Cadastrar
            </Button>
          </Dialog.Close>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  )
}
