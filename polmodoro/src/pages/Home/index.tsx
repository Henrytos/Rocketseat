import {
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  forwardRef,
  useEffect,
  useState,
} from "react";
import { set, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { differenceInSeconds } from "date-fns";

const TaskLabel = ({ ...props }: LabelHTMLAttributes<HTMLLabelElement>) => (
  <label className="font-bold" {...props} />
);

const TaskInput = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ ...props }, ref) => (
  <input
    ref={ref} // Passe a ref aqui
    className="bg-gray-800 outline-none p-1 text-gray-400 border-b-2 border-gray-500 focus:border-green-500"
    {...props}
  />
));

const TimeNumber = ({ ...props }) => (
  <span
    className="text-9xl bg-gray-700 rounded-lg p-4 font-robotoMono "
    {...props}
  />
);

const ButtonInitialNewCycle = ({
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    type="submit"
    className="bg-green-500/80 text-gray-50 flex h-16 
            justify-center items-center rounded-md disabled:bg-green-500/20 disabled:cursor-not-allowed disabled:text-gray-300 transition-colors"
    {...props}
  />
);
const ButtonFinalNewCycle = ({
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      type="button"
      className="bg-red-500/80 text-gray-50 flex h-16 
            justify-center items-center rounded-md disabled:bg-green-500/20 disabled:cursor-not-allowed disabled:text-gray-300 transition-colors"
      {...props}
    />
  );
};

const newCicleFormValidarionScheme = zod.object({
  task: zod.string().min(1, "informe a tarefa"),
  minutesAmount: zod
    .number()
    .min(5, "tempo minmo 5 minutos")
    .max(60, "tempo maximo 60 minutos"),
});

type NewCycleFormData = zod.infer<typeof newCicleFormValidarionScheme>;

interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interruptedDate?: Date;
}

export default function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [cycleActiveId, setCycleActiveId] = useState<string | null>(null);
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

  function handleCreateNewCycle(data: NewCycleFormData) {
    const id = String(new Date().getTime());
    const newCycle: Cycle = {
      id,
      minutesAmount: data.minutesAmount,
      task: data.task,
      startDate: new Date(),
    };
    setCycles((state) => [...state, newCycle]);
    setCycleActiveId(id);
    setAmountSecondsPassed(0);
    reset();
  }

  const activeCycle = cycles.find((cycle) => cycle.id === cycleActiveId);

  useEffect(() => {
    let interval: number;
    if (activeCycle) {
      interval = setInterval(() => {
        setAmountSecondsPassed(
          differenceInSeconds(new Date(), activeCycle.startDate)
        );
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [activeCycle]);

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;

  const minutes = String(minutesAmount).padStart(2, "0");
  const seconds = String(secondsAmount).padStart(2, "0");

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds} | Pomodoro`;
    }
  }, [activeCycle, seconds, minutes]);

  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCicleFormValidarionScheme),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  function handleInterruptCycle() {
    setCycles(
      cycles.map((cycle) => {
        if (cycle.id == cycleActiveId) {
          return { ...cycle, interruptedDate: new Date() };
        } else {
          return cycle;
        }
      })
    );
    setCycleActiveId(null);
  }
  console.log(cycles);

  const task = watch("task");
  const isSubmitDisabled = !task;

  return (
    <>
      <div className="flex w-full justify-center ">
        <form
          className="flex flex-col gap-14 max-w-5xl"
          onSubmit={handleSubmit(handleCreateNewCycle)}
        >
          <div>
            <TaskLabel htmlFor="task">Vou trabalhar em</TaskLabel>
            <TaskInput
              type="text"
              id="task"
              list="task-suggestions"
              {...register("task")}
              min={1}
            />

            <datalist id="task-suggestions">
              <option value="Projeto 1" />
              <option value="Projeto 2" />
              <option value="Projeto 3" />
              <option value="Projeto 4" />
            </datalist>

            <TaskLabel htmlFor="minutesAmount">Durante</TaskLabel>
            <TaskInput
              type="number"
              id="minutesAmount"
              {...register("minutesAmount", { valueAsNumber: true })}
              min={5}
              max={60}
            />
            <TaskLabel>minutos.</TaskLabel>
          </div>
          <div className="flex justify-center gap-4">
            <TimeNumber>{minutes[0]}</TimeNumber>
            <TimeNumber>{minutes[1]}</TimeNumber>
            <span className="text-9xl text-green-500/80 font-bold">:</span>
            <TimeNumber>{seconds[0]}</TimeNumber>
            <TimeNumber>{seconds[1]}</TimeNumber>
          </div>
          {activeCycle ? (
            <ButtonFinalNewCycle onClick={() => handleInterruptCycle()}>
              Parar
            </ButtonFinalNewCycle>
          ) : (
            <ButtonInitialNewCycle disabled={isSubmitDisabled}>
              Começar
            </ButtonInitialNewCycle>
          )}
        </form>
      </div>
    </>
  );
}
