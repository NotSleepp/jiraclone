import { Button } from "@/components/ui/button";
import Image from "next/image";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <main className="bg-neutral-100 min-h-screen">
      <div className=" mx-auto max-w-screen-2xl p-4">
        <nav className="flex justify-between items-center">
          <Image src="/logo.svg" height={50} width={100} alt="logo" />
            <Button variant='secondary'>
                Registrarse
            </Button>
        </nav>
        <div className="flex flex-col items-center jsutify-center pt-4 md:pt-14">
           {children} 
        </div>
        
      </div>
    </main>
  );
};

export default AuthLayout;