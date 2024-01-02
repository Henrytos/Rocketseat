import { Helmet } from "react-helmet-async";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const singInForm = z.object({
  email: z.string().email(),
});

type SingInForm = z.infer<typeof singInForm>;

export function SingIn() {
  const { register, handleSubmit, reset, formState } = useForm<SingInForm>({
    resolver: zodResolver(singInForm),
    defaultValues: {
      email: "",
    },
  });

  const { isSubmitting } = formState;

  async function handleSingIn(data: SingInForm) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success("Login realizado com sucesso!", {
        action: {
          label: "Reenviar",
          onClick: () => handleSingIn(data),
        },
      });
      console.log(data);
      reset();
    } catch (error) {
      toast.error("Erro ao realizar login!");
    }
  }

  return (
    <div className="w-full max-w-96 text-center space-y-2">
      <Button
        asChild
        variant={"ghost"}
        className="absolute top-8 right-8 font-light text-sm "
      >
        <Link to="/sing-up">Sing-Up</Link>
      </Button>
      <Helmet title="Login" />
      <h1 className="text-2xl font-semibold tracking-tight">Acessar painel</h1>
      <p className="text-sm text-muted-foreground">
        Acompanhe suas vendas pelo painel do parceiro!
      </p>
      <form className="space-y-4" onSubmit={handleSubmit(handleSingIn)}>
        <div className="space-y-2">
          <Label htmlFor="email">Seu e-mail</Label>
          <Input id="email" type="email" {...register("email")} />
        </div>

        <Button className="w-full" type="submit" disabled={isSubmitting}>
          Acessar painel
        </Button>
      </form>
    </div>
  );
}
