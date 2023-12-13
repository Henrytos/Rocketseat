import money from "../assets/imgs/money.png";
import down from "../assets/imgs/down.png";
import up from "../assets/imgs/up.png";

export function Summary() {
  return (
    <div className="grid grid-cols-3 max-w-6xl m-auto gap-8 translate-y-1/2 ">
      <div className="bg-gray-600 flex flex-col justify-between h-32 rounded-lg py-6 px-8">
        <div className="flex justify-between items-center">
          <span className="text-gray-300">entradas</span>
          <img src={up} alt="" />
        </div>
        <span className="font-bold text-3xl text-gray-100">R$17.400,00</span>
      </div>
      <div className="bg-gray-600 flex flex-col justify-between h-32 rounded-lg py-6 px-8">
        <div className="flex justify-between items-center">
          <span className="text-gray-300">entradas</span>
          <img src={down} alt="" />
        </div>
        <span className="font-bold text-3xl text-gray-100">R$17.400,00</span>
      </div>
      <div className="bg-green-700 flex flex-col justify-between h-32 rounded-lg py-6 px-8">
        <div className="flex justify-between items-center">
          <span className="text-gray-300">entradas</span>
          <img src={money} alt="" />
        </div>
        <span className="font-bold text-3xl text-gray-100">R$17.400,00</span>
      </div>
    </div>
  );
}
