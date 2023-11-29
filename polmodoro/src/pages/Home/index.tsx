import { InputHTMLAttributes, LabelHTMLAttributes, forwardRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

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

const ButtonInitialNewCycle = ({ ...props }) => (
  <button
    type="submit"
    className="bg-green-500/80 text-gray-50 flex h-16 
            justify-center items-center rounded-md disabled:bg-green-500/20 disabled:cursor-not-allowed disabled:text-gray-300 transition-colors"
    {...props}
  />
);

const newCicleFormValidarionScheme = zod.object({
  task: zod.string().min(1, "informe a tarefa"),
  minutesAmount: zod
    .number()
    .min(5, "tempo minmo 5 minutos")
    .max(60, "tempo maximo 60 minutos"),
});

type NewCycleFormData = zod.infer<typeof newCicleFormValidarionScheme>;

export default function Home() {
  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCicleFormValidarionScheme),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  function handleCreateNewCycle(data: NewCycleFormData) {
    console.log(data);
    reset();
  }

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
            <TimeNumber>0</TimeNumber>
            <TimeNumber>0</TimeNumber>
            <span className="text-9xl text-green-500/80">:</span>
            <TimeNumber>0</TimeNumber>
            <TimeNumber>0</TimeNumber>
          </div>
          <ButtonInitialNewCycle disabled={isSubmitDisabled}>
            Começar
          </ButtonInitialNewCycle>
        </form>
      </div>
    </>
  );
}
