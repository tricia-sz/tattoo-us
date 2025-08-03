import { Button } from "@/components/ui/button";
import Image from "next/image";
import tatuadorImg from '../../../../public/tatuador.jpg'

export function Hero() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 pt-20 sm:px-6 lg:px-8">

        <main className="flex items-center justify-center">
          <article className="flex-[2] max-w-3xl space-y-8 flex flex-col justify-center mb-8">
            <h1 className="text-4xl lg:text-5xl font-bold max-w-2xl tracking-tight">
              Encontre os melhores profissionais em um único local!
            </h1>
            <p className="text-base md:text-lg text-gray-600">
              Nós somos uma plataforma para profissionais  com foco em agilizar seu atendimento de forma simplificada e organizada.
            </p>

            <Button className="bg-red-700 hover:bg-red-500 w-fit px-6 font-semibold">
              Encontre um stúdio
            </Button>
          </article>


          <div className="hidden md:block py-4 ">
            <Image
              src={tatuadorImg}
              alt="Foto ilustrativa de um profissional de saude"
              width={340}
              height={400}
              className="object-contain rounded-2xl"
              quality={100}
              priority
              
            />
          </div>
        </main>

      </div>
    </section>
  )
}