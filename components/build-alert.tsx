"use client";

import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";


export const BuildAlert = () => {

  return (
    <Card className="w-1/2 md:w-full">
      <CardHeader className="flex gap-3">
        <Image
          alt="Logo UPIICSA"
          height={40}
          radius="sm"
          src="\images\upiicsa.png"
          width={40}
        />
        <div className="flex flex-col w-full items-center">
          <p className="text-md text-center w-full">Tecnología y Saberes para el Bienestar Social.</p>
          <p className="text-small text-default-500 text-center">Próximamente: Una plataforma para la mujer rural en Oaxaca.</p>
        </div>
        <Image
          alt="Logo IPN"
          height={40}
          radius="sm"
          src="\images\logo_ipn.png"
          width={80}
        />
      </CardHeader>
      <Divider />
      <CardBody>
        <p>Estamos construyendo el portal oficial del proyecto <b>IH-2025-I-268</b>.

Bajo la dirección de la <a href = "https://orcid.org/0000-0002-8556-2955" className="text-primary under-line hover:text-blue-800">Dra. Martha Jiménez García</a>, esta iniciativa tiene como objetivo diseñar e implementar una estrategia digital de base comunitaria para contribuir a la reducción de la pobreza en comunidades de la región Mixteca de Oaxaca.

Nuestro enfoque se centra en el análisis de factores humanísticos, sociales, económicos y culturales que afectan a las mujeres rurales, buscando desarrollar soluciones tecnológicas orientadas al fortalecimiento de su economía, el acceso a mercados locales, la preservación de saberes tradicionales y el incremento del bienestar social.</p>
      
      </CardBody>
      <Divider />
      <CardFooter>
        <Link isExternal showAnchorIcon href="https://github.com/prrocontento/saberes-ipn">
          Visita la documentación de nuestro sitio por el momento.
        </Link>
      </CardFooter>
    </Card>
  );
};