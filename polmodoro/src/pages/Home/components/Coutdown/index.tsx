import { useContext, useEffect } from "react";
import { differenceInSeconds } from "date-fns";
import { CyclesContext } from "../../../../contexts/CyclesContexts";

const TimeNumber = ({ ...props }) => (
  <span
    className="text-9xl bg-gray-700 rounded-lg p-4 font-robotoMono "
    {...props}
  />
);
export function Coutdown() {
  const {
    activeCycle,
    markCurrentCycleAsFinished,
    amountSecondsPassed,
    setAmountPassed,
  } = useContext(CyclesContext);

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;

  const minutes = String(minutesAmount).padStart(2, "0");
  const seconds = String(secondsAmount).padStart(2, "0");

  useEffect(() => {
    let interval: number;
    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          new Date(activeCycle.startDate)
        );

        if (secondsDifference >= totalSeconds) {
          markCurrentCycleAsFinished();
          clearInterval(interval);
          setAmountPassed(totalSeconds);
        } else {
          setAmountPassed(secondsDifference);
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [activeCycle, totalSeconds]);

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds} | Pomodoro`;
    }
  }, [activeCycle, seconds, minutes]);

  return (
    <div className="flex justify-center gap-4">
      <TimeNumber>{minutes[0]}</TimeNumber>
      <TimeNumber>{minutes[1]}</TimeNumber>
      <span className="text-9xl text-green-500/80 font-bold">:</span>
      <TimeNumber>{seconds[0]}</TimeNumber>
      <TimeNumber>{seconds[1]}</TimeNumber>
    </div>
  );
}
