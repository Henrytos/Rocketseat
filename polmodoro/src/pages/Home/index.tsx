import { ButtonHTMLAttributes, createContext, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { Coutdown } from "./components/Coutdown";
import { NewCycleForm } from "./components/NewCicleForm";

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

interface CyclesContextType {
  activeCycle: Cycle | undefined;
  cycleActiveId: string | null;
  amountSecondsPassed: number;
  markCurrentCycleAsFinished: () => void;
  setAmountPassed: (seconds: number) => void;
}
export const CyclesContext = createContext({} as CyclesContextType);

const newCicleFormValidarionScheme = zod.object({
  task: zod.string().min(1, "informe a tarefa"),
  minutesAmount: zod
    .number()
    .min(1, "tempo minmo 5 minutos")
    .max(60, "tempo maximo 60 minutos"),
});

type NewCycleFormData = zod.infer<typeof newCicleFormValidarionScheme>;

interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interruptedDate?: Date;
  fineshedDate?: Date;
}

export default function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [cycleActiveId, setCycleActiveId] = useState<string | null>(null);
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

  const activeCycle = cycles.find((cycle) => cycle.id === cycleActiveId);

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCicleFormValidarionScheme),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  const { handleSubmit, watch, reset } = newCycleForm;

  const task = watch("task");

  const isSubmitDisabled = !task;

  function markCurrentCycleAsFinished() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id == cycleActiveId) {
          return { ...cycle, interruptedDate: new Date() };
        } else {
          return cycle;
        }
      })
    );
    setCycleActiveId(null);
  }
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
  function handleInterruptCycle() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id == cycleActiveId) {
          return { ...cycle, interruptedDate: new Date() };
        } else {
          return cycle;
        }
      })
    );
    setCycleActiveId(null);
  }
  function setAmountPassed(seconds: number) {
    setAmountSecondsPassed(seconds);
  }
  return (
    <>
      <div className="flex w-full justify-center ">
        <form
          className="flex flex-col gap-14 max-w-5xl"
          onSubmit={handleSubmit(handleCreateNewCycle)}
        >
          <CyclesContext.Provider
            value={{
              activeCycle,
              cycleActiveId,
              amountSecondsPassed,
              markCurrentCycleAsFinished,
              setAmountPassed,
            }}
          >
            <FormProvider {...newCycleForm}>
              <NewCycleForm />
            </FormProvider>

            <Coutdown />
          </CyclesContext.Provider>
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
