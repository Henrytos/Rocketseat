import money from '../assets/imgs/money.png'
import down from '../assets/imgs/down.png'
import up from '../assets/imgs/up.png'
import { ReactNode } from 'react'
import { formaterCurrency } from '../utils/formater'
import { useSummary } from '../hooks/useSummary'

function SumaryContainer({ ...props }) {
  return (
    <div
      className="grid grid-cols-3 max-w-6xl m-auto gap-8 translate-y-1/2 "
      {...props}
    />
  )
}
interface CardSumaryProps {
  className?: string
  children: ReactNode
}

function CardSumary({ className, children }: CardSumaryProps) {
  return (
    <div
      className={`bg-gray-600 flex flex-col justify-between h-32 rounded-lg py-6 px-8 ${className}`}
    >
      {children}
    </div>
  )
}

function TypeCardSumary({ children }: { children: ReactNode }) {
  return (
    <div className={`flex justify-between items-center `}>
      <span className="text-gray-300">entradas</span>
      {children}
    </div>
  )
}

function PriceTransaction({ price }: { price: number }) {
  return (
    <span className="font-bold text-3xl text-gray-100">
      {' '}
      {formaterCurrency.format(price)}
    </span>
  )
}

export function Summary() {
  const summary = useSummary()

  return (
    <SumaryContainer>
      <CardSumary>
        <TypeCardSumary>
          <img src={up} alt="" />
        </TypeCardSumary>
        <PriceTransaction price={summary.income} />
      </CardSumary>

      <CardSumary>
        <TypeCardSumary>
          <img src={down} alt="" />
        </TypeCardSumary>
        <PriceTransaction price={summary.outcome} />
      </CardSumary>

      <CardSumary className="bg-green-700 ">
        <TypeCardSumary>
          <img src={money} alt="" />
        </TypeCardSumary>
        <PriceTransaction price={summary.total} />
      </CardSumary>
    </SumaryContainer>
  )
}
