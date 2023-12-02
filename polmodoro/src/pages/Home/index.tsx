import { ButtonHTMLAttributes, useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { Coutdown } from "./components/Coutdown";
import { NewCycleForm } from "./components/NewCicleForm";
import { CyclesContext } from "../../contexts/CyclesContexts";

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
    .min(1, "tempo minmo 5 minutos")
    .max(60, "tempo maximo 60 minutos"),
});

type NewCycleFormData = zod.infer<typeof newCicleFormValidarionScheme>;

export default function Home() {
  const { activeCycle, createNewCycle, interruptCycle } =
    useContext(CyclesContext);
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

  function handleCeateNewCycle(data: NewCycleFormData) {
    createNewCycle(data);
    reset();
  }

  return (
    <>
      <div className="flex w-full justify-center ">
        <form
          className="flex flex-col gap-14 max-w-5xl"
          onSubmit={handleSubmit(handleCeateNewCycle)}
        >
          <FormProvider {...newCycleForm}>
            <NewCycleForm />
          </FormProvider>

          <Coutdown />
          {activeCycle ? (
            <ButtonFinalNewCycle onClick={() => interruptCycle()}>
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
