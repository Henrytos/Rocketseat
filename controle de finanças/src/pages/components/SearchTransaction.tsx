import search from "../../assets/imgs/search.png";

export function SearchTransaction() {
  return (
    <form action="" className="flex gap-6 justify-between">
      <input
        type="text"
        name=""
        id=""
        className="grow bg-gray-900 rounded py-3 px-4 outline-none text-gray-500 "
        placeholder="Busque uma transação"
      />
      <button
        type="submit"
        className="
        text-green-300 border-[1px] border-green-300 py-3 px-7 rounded
      cursor-pointer
        "
      >
        <img src={search} alt="buscar" className="inline pr-1" />

        <span>Buscar</span>
      </button>
    </form>
  );
}
