import { useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { Coutdown } from "./components/Coutdown";
import { NewCycleForm } from "./components/NewCicleForm";
import { CyclesContext } from "../../contexts/CyclesContexts";
import { Buttons } from "./components/Buttons";

const newCicleFormValidarionScheme = zod.object({
  task: zod.string().min(1, "informe a tarefa"),
  minutesAmount: zod
    .number()
    .min(1, "tempo minmo 5 minutos")
    .max(60, "tempo maximo 60 minutos"),
});

type NewCycleFormData = zod.infer<typeof newCicleFormValidarionScheme>;

export default function Home() {
  const { cycles, createNewCycle } = useContext(CyclesContext);
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

  const quantityCiclesFocus = cycles.reduce((acum, cycle) => {
    if (cycle.fineshedDate) {
      return acum + 1;
    }
    return acum;
  }, 0);

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
          <Buttons isSubmitDisabled={isSubmitDisabled} />
          <div className="flex gap-2 justify-center">
            <p className="text-gray-500 font-bold">#{quantityCiclesFocus}</p>
            <p>Time to focus!</p>
          </div>
        </form>
      </div>
    </>
  );
}
