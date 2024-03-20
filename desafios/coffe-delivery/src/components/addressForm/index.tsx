"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { CardContainer } from "../containerCard";

interface InputFormProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className: string;
}

function InputForm({ className, ...props }: InputFormProps) {
  return (
    <input
      {...props}
      className={` bg-base-input rounded p-3 text-base-text placeholder:text-base-text/75 ${className} border-zinc-500 outline-none focus:border-zinc-600`}
    />
  );
}

export function AddressForm() {
  const sechemaAddressForm = zod.object({
    telephone: zod.string().min(8).max(9).optional(),
    adress: zod.string().min(3).optional(),
    houseNumber: zod.string().min(1).optional(),
    complement: zod.string().min(1).optional(),
    state: zod.string().min(1).optional(),
    city: zod.string().min(1).optional(),
    district: zod.string().min(1).optional(),
  });

  type sechemaAddressFormType = zod.infer<typeof sechemaAddressForm>;

  const { register } = useForm<sechemaAddressFormType>({
    resolver: zodResolver(sechemaAddressForm),
  });
  return (
    <div className="space-y-4">
      <CardContainer>
        <h2>Enderenço de Entreha</h2>
        <p>Informe o endereço onde deseja receber seu pedido</p>
        <form className="grid grid-cols-3 gap-y-4 gap-x-3">
          <InputForm
            type="number"
            {...register("telephone")}
            placeholder="90250-440"
            className="col-span-1"
          />
          <InputForm
            type="text"
            {...register("adress")}
            placeholder="Rua João Daniel Martinelli"
            className="col-span-3"
          />
          <InputForm
            type="number"
            {...register("houseNumber")}
            placeholder="99"
            className="col-span-1"
          />
          <InputForm
            type="number"
            {...register("complement")}
            placeholder="Complemento"
            className="col-span-2"
          />
          <InputForm
            type="text"
            {...register("state")}
            className="col-span-1"
            placeholder="Farrapos"
          />
          <div className="col-span-2 flex gap-3">
            <InputForm
              type="text"
              {...register("city")}
              className="w-4/5"
              placeholder="Porto Alegre"
            />
            <InputForm
              type="text"
              {...register("district")}
              className="w-1/5"
              placeholder="RS"
            />
          </div>
        </form>
      </CardContainer>
    </div>
  );
}
