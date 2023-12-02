import {
  InputHTMLAttributes,
  LabelHTMLAttributes,
  forwardRef,
  useContext,
} from "react";
import { useFormContext } from "react-hook-form";
import { CyclesContext } from "../../../../contexts/CyclesContexts";

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

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();

  return (
    <div>
      <TaskLabel htmlFor="task">Vou trabalhar em</TaskLabel>
      <TaskInput
        type="text"
        id="task"
        list="task-suggestions"
        disabled={!!activeCycle}
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
        disabled={!!activeCycle}
        {...register("minutesAmount", { valueAsNumber: true })}
        min={1}
        max={60}
      />
      <TaskLabel>minutos.</TaskLabel>
    </div>
  );
}
