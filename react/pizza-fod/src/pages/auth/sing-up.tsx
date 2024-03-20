import { Helmet } from "react-helmet-async";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";

const singUpForm = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email(),
});

type SingUpForm = z.infer<typeof singUpForm>;

export function SingUp() {
  const navigate = useNavigate();

  const { register, handleSubmit, reset, formState } = useForm<SingUpForm>({
    resolver: zodResolver(singUpForm),
    defaultValues: {
      email: "",
    },
  });

  const { isSubmitting } = formState;

  async function handleSingIn(data: SingUpForm) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success("Cadastro realizado com sucesso", {
        action: {
          label: "Ir para login",
          onClick: () => navigate("/sing-in"),
        },
      });
      console.log(data);
      reset();
    } catch (error) {
      toast.error("Erro ao realizar cadastro!");
    }
  }

  return (
    <div className="w-full max-w-96 text-center space-y-3">
      <Helmet title="Login" />
      <Button
        asChild
        variant={"ghost"}
        className="absolute top-8 right-8 font-light text-sm "
      >
        <Link to="/sing-in">Sing-In</Link>
      </Button>
      <h1 className="text-2xl font-semibold tracking-tight">Acessar painel</h1>
      <p className="text-sm text-muted-foreground">
        Acompanhe suas vendas pelo painel do parceiro!
      </p>
      <form
        className="space-y-4 text-left"
        onSubmit={handleSubmit(handleSingIn)}
      >
        <div className="space-y-2">
          <Label htmlFor="restaurantName">Nome do restaurente</Label>
          <Input
            id="restaurantName"
            type="text"
            {...register("restaurantName")}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="managerName">Seu Nome</Label>
          <Input id="managerName" type="text" {...register("managerName")} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Seu e-mail</Label>
          <Input id="email" type="email" {...register("email")} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Telefone</Label>
          <Input id="phone" type="tel" {...register("phone")} />
        </div>

        <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
          Ao continuar, você concorda com nossos{" "}
          <a href="" className="underline underline-offset-4">
            termos de serviço
          </a>{" "}
          e{" "}
          <a href="" className="underline underline-offset-4">
            políticas de privacidade
          </a>
        </p>

        <Button className="w-full" type="submit" disabled={isSubmitting}>
          Login
        </Button>
        <p></p>
      </form>
    </div>
  );
}
