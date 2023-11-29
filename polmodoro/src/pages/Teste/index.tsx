import {
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  forwardRef,
} from "react";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

const Label = ({ ...props }: LabelHTMLAttributes<HTMLLabelElement>) => (
  <label className="font-bold" {...props} />
);

const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ ...props }, ref) => (
  <input
    ref={ref} // Passe a ref aqui
    className="bg-gray-800 outline-none p-1 text-gray-400 border-b-2 border-gray-500 focus:border-green-500"
    {...props}
  />
));

const Button = ({ ...props }: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    type="submit"
    className="bg-green-500/80 text-gray-50 flex h-16 
            justify-center items-center rounded-md disabled:bg-green-500/20 disabled:cursor-not-allowed disabled:text-gray-300 transition-colors"
    {...props}
  />
);

const newLoginFormValidarionScheme = zod.object({
  name: zod.string().min(1, "informe o nome"),
  email: zod.string().min(1, "informe o email"),
  age: zod.string().min(1, "informe a idade"),
});

type NewLoginFormData = zod.infer<typeof newLoginFormValidarionScheme>;

export default function Teste() {
  const { register, handleSubmit, reset, watch } = useForm<NewLoginFormData>({
    resolver: zodResolver(newLoginFormValidarionScheme),
    defaultValues: {
      name: "",
      email: "",
      age: "",
    },
  });

  function handleSubmitLogin(data: any) {
    console.log(data);
    reset();
  }

  const isValidateLogin = !(
    watch("name") != "" &&
    watch("email") != "" &&
    watch("age") != ""
  );

  return (
    <form
      className="flex flex-col gap-4 max-w-lg m-auto"
      onSubmit={handleSubmit(handleSubmitLogin)}
    >
      <div className="flex flex-col gap-2">
        <Label htmlFor="name">nome:</Label>
        <Input type="text" id="name" {...register("name")} required />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="email">email</Label>
        <Input type="email" id="email" {...register("email")} required />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="age">idade</Label>
        <Input type="number" id="age" {...register("age")} required />
      </div>
      <Button disabled={isValidateLogin}>Enviar</Button>
    </form>
  );
}
