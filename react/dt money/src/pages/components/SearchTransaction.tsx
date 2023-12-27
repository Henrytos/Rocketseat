import search from "../../assets/imgs/search.png";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export function SearchTransaction() {
  const searchFormSchema = zod.object({
    query: zod.string(),
  });

  type SearchFormInputs = zod.infer<typeof searchFormSchema>;

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchTransaction(data: SearchFormInputs) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
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
        {...register("query")}
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
      </button>
    </form>
  );
}
