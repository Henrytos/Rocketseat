import { Button, Dialog } from "@radix-ui/themes";
import { InputHTMLAttributes } from "react";

function InputNewTransaction({
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="bg-gray-900 rounded py-3 px-4 outline-none text-gray-500 w-full  placeholder:text-gray-500"
    />
  );
}

function SwitchTypeTransaction() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <label
        htmlFor="inputTransaction"
        className="flex py-4 justify-center  bg-gray-600 rounded "
      >
        <span className="text-gray-300">Entrada</span>
        <input
          type="radio"
          name="typeTransaction"
          id="inputTransaction"
          value="inputTransaction"
          className="absolute invisible"
        />
      </label>
      <label
        htmlFor="outputTransaction"
        className="flex py-4 justify-center bg-gray-600 rounded   "
      >
        <span className="text-gray-300">saida</span>
        <input
          type="radio"
          name="typeTransaction"
          id="outputTransaction"
          value="outputTransaction"
          className="absolute invisible"
        />
      </label>
    </div>
  );
}

export function NewTransactionModal() {
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
        <form action="" className="flex flex-col gap-4">
          <InputNewTransaction
            type="text"
            name="description"
            id="description"
            placeholder="Descrição"
          />
          <InputNewTransaction
            type="text"
            name="priece"
            id="priece"
            placeholder="Preço"
          />
          <InputNewTransaction
            type="text"
            name="category"
            id="category"
            placeholder="Descrição"
          />
          <SwitchTypeTransaction />
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
  );
}
