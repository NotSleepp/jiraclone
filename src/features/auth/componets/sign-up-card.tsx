import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { DottedSeparator } from "@/components/dotted-separator";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormMessage,
  FormItem,
  FormField,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().trim().min(1, "Nombre requerido"),
  email: z.string().trim().email("Email incorrecto"),
  password: z.string().min(8, "Se requieren 8 Caracteres"),
});

const onSubmit = (values: z.infer<typeof formSchema>) => {
  console.log({ values });
};

export const SignUpCard = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  return (
    <Card className="w-full h-full md:w-[487px] border-none shadow-none">
      <CardHeader className="flex items-center justify-center text-center p-7">
        <CardTitle className="tect-2xl">Registrarse</CardTitle>
        <CardDescription>
          Al Registrarse acepta nuestra {""}
          <Link href="/privacy">
            <span className="text-blue-700">Politica de privacidad</span>
          </Link>{" "}
          y{" "}
          <Link href="/terms">
            <span className="text-blue-700">Terminos de servicio</span>
          </Link>
        </CardDescription>
      </CardHeader>
      <div className="px-7 mb-2">
        <DottedSeparator />
      </div>
      <CardContent className="p-7">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-4">
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="Ingrese su nombre"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="Ingrese su Email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      placeholder="Ingrese su Contraseña"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button disabled={false} size="lg" className="w-full">
              Iniciar Sesion
            </Button>
          </form>
        </Form>
      </CardContent>
      <div className="px-7 mb-2">
        <DottedSeparator />
      </div>
      <CardContent className="p-7 flex flex-col gap-y-4">
        <Button
          disabled={false}
          variant="secondary"
          size="lg"
          className="w-full"
        >
          <FcGoogle className="mr-2 size-5" />
          Iniciar con Google
        </Button>

        <Button
          disabled={false}
          variant="secondary"
          size="lg"
          className="w-full"
        >
          <FaGithub className="mr-2 size-5" />
          Iniciar con Github
        </Button>
      </CardContent>
      <div className="px-7 mb-2">
        <DottedSeparator />
      </div>
      <CardContent className="p-7 flex items-center justify-center">
          <p>
            Ya tiene una cuenta? 
              <Link href="/sign-in">
                <span className="text-blue-700">&nbsp;Iniciar Sesion</span>
              </Link>
          </p>
      </CardContent>
    </Card>
  );
};
