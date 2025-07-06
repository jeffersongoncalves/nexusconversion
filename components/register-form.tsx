import {cn} from "@/lib/utils"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardHeader, CardTitle,} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {signIn} from "next-auth/react";
import {useRouter} from "next/navigation";
import {useState} from "react";
import Link from "next/link";

export function RegisterForm({className, ...props}: React.ComponentProps<"div">) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    try {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const signInResult = await signIn("credentials", {
        ...Object.fromEntries(formData),
        redirect: false,
      });

      if (signInResult?.error) {
        setError("Failed to sign in after registration");
        return;
      }

      router.push("/");
      router.refresh();
    } catch (error) {
      setError(error instanceof Error ? error.message : "Registration failed");
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Inscreva-se</CardTitle>
          <CardDescription>
            Cadastra-se para continuar...
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="name">Nome</Label>
                <Input id="name" name="name" type="text" placeholder="John Smith" required/>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="m@example.com" required/>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="password">Senha</Label>
                <Input id="password" name="password" type="password" required/>
              </div>
              {error && (
                <div className="text-red-500 text-sm text-center">{error}</div>
              )}
              <Button type="submit" className="w-full">
                Registrar
              </Button>
            </div>
            <div className="text-center text-sm">
              Já tem uma conta?{" "}
              <Link href="/login" className="underline underline-offset-4">
                Autenticar-se aqui
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
