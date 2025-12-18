import { Button } from '@heroui/button';
import { Card, CardBody, CardFooter, CardHeader } from '@heroui/card';
import { Image } from "@heroui/image";

interface CardProductProps { title: string, imgsrc: string, producer: string, origin: string, price: number,description:string }

export default function CardProduct({ title, imgsrc, producer, origin, price,description }: CardProductProps) {
  return (
    <Card isFooterBlurred className="w-full h-full col-span-12 sm:col-span-5">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start ">
        <h4 className="font-bold text-center w-full">{title}</h4>
      </CardHeader>
      <CardBody>
        <Image
          alt="Card example background"
          className=""
          src={imgsrc}
        />
      </CardBody>
      <CardFooter className="bg-white/30 flex flex-col gap-2">
        <p className="text-tiny text-left w-full">{description}</p>
        <p className="text-tiny text-left w-full">Producido por: {producer}</p>
        <p className="text-tiny text-left w-full">Orígen: {origin}</p>
        <h1 className="text-xl text-left w-full">
          Precio: $ {price} mxn
        </h1>
        
        <div className='w-full flex justify-evenly'>
          <Button className="" color="primary" radius="sm" size="lg">
            Aprender
          </Button>
          <Button className="text-white" color="success" radius="sm" size="lg">
            Comprar
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
