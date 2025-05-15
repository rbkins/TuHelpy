import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#fa7a22] to-white p-4 md:p-24">
      <div className="flex flex-col items-center justify-center text-center max-w-3xl">
        <div className="mb-8 ">
          <div className="w-32 h-32 bg-[#F28C38] rounded-full flex items-center justify-center mx-auto">
            <div className="text-white text-6xl ">
              <Image
                src="/Group 13.png"
                alt="Group 13"
                width={128}
                height={128}
              />
            </div>
          </div>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-black md:text-6xl mb-4">
          ¡Bienvenido a ServiYa!
        </h1>
        <p className="text-xl text-[#494343] mb-12 max-w-2xl">
          Conecta con profesionales o ofrece tus servicios de manera rápida y
          segura.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-md">
          <Button
            asChild
            size="lg"
            className="bg-[#F28C38] text-white hover:bg-[#f05c00] text-[15px] py-4 px-6 rounded-lg shadow-lg"
          >
            <Link href="/client">
              Explorar como Cliente
              <ArrowRight className="ml-2 h-5 w-6" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-white border-2 border-[#F28C38] text-[#F28C38] hover:bg-white/80 text-[15px] py-4 px-6 rounded-lg shadow-lg"
          >
            <Link href="/technician">
              Explorar como Técnico
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        <div className="flex gap-4 mt-8">
          <Button
            asChild
            className="text-[#736A6A] bg-[#f1f5f9] hover:bg-[#f48b35] hover:text-[#F1F5F9] text-lg py-2 px-4 rounded-md shadow-md"
          >
            <Link href="/login">Iniciar Sesión</Link>
          </Button>
          <Button
            asChild
            className="text-[#736A6A] bg-[#f1f5f9] hover:bg-[#f48b35] hover:text-[#F1F5F9] text-lg py-2 px-4 rounded-md shadow-md"
          >
            <Link href="/register">Registrarse</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
