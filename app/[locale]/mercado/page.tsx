import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Button } from "@heroui/button";
import CardProduct from "@/components/card-product";
import {Alert} from "@heroui/alert";
import Link from "next/link";
import SearchBar from "@/components/search-bar";

// Puedes reemplazar este Header con un Navbar básico de HeroUI:


const Mercado = () => {
  const productos = [
    {
      id: 1,
      nombre: "Maíz Criollo Orgánico",
      productora: "Doña María Hernández",
      comunidad: "San Juan Mixtepec, Oaxaca",
      categoria: "Granos",
      precio: 85,
      unidad: "kg",
      descripcion: "Maíz azul cultivado sin químicos, ideal para tortillas, atole y tamales.",
      rating: 4.9,
      cursoRelacionado: "Tortillas de Maíz a Mano",
      imagen: "https://img.freepik.com/fotos-premium/bayas-trigo-frescas-aisladas-sobre-fondo-blanco_787273-26959.jpg"
    },
    {
      id: 2,
      nombre: "Kit de Hierbas Medicinales",
      productora: "Teresa López",
      comunidad: "Tepoztlán, Morelos",
      categoria: "Medicina Natural",
      precio: 150,
      unidad: "kit",
      descripcion: "Selección de 8 hierbas secas: manzanilla, ruda, albahaca, epazote y más.",
      rating: 4.8,
      cursoRelacionado: "Medicina con Plantas del Huerto",
      imagen: "https://resetea.es/wp-content/uploads/2020/09/Gourmet-01.jpg"
    }
    // ...otros productos
  ];

  return (
    <div className="min-h-screen bg-background w-full">

      <section className="relative bg-accent w-full">
        <div className="w-full">
          <h1 className="font-serif text-5xl font-bold mb-4 w-full">
            Catálogo de Productos
          </h1>

          <p className="text-xl text-muted-foreground mb-6">
            Productos originarios elaborados por mujeres rurales. Compra directo de quien produce.
          </p>

        </div>
      </section>

      <main className="container mx-auto px-4 py-4 max-w-6xl">
        <div className="mb-8">
        <SearchBar filters={['orgánico', 'de temporada']}/>
        </div>

        {/* GRID DE PRODUCTOS */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          
          {productos.map((producto) => (
            <Card 
              key={producto.id} 
            >
            <CardProduct title={producto.nombre} imgsrc={producto.imagen} producer={producto.productora} origin={producto.comunidad} price={producto.precio} description={producto.descripcion}/>

              
            </Card>
          ))}
        </div>

        {/* CTA */}
        <Card  className="mt-12 bg-gradient-to-br from-secondary/10 to-primary/5 border-2 border-secondary/20">
                  <CardHeader className="font-serif text-2xl">¿Quieres Vender tus Productos? - Este espacio es tuyo para mostrar lo que haces</CardHeader>
            <CardBody>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Si elaboras productos artesanales, alimentos orgánicos o cualquier producto originario de tu comunidad, 
                este catálogo es para ti. Juntas podemos llegar a más personas y valorar el trabajo de nuestras manos.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button isDisabled className="rounded-full">
                  Registrar mis Productos
                </Button>
                <Button isDisabled variant="solid" className="rounded-full">
                  <Link href="/formacion">
                    {/* <GraduationCap className="mr-2 h-4 w-4" /> */}
                    También puedo crear un curso
                  </Link>
                </Button>
              </div>
            </CardBody>
          </Card>

      </main>
    </div>
  );
};

export default Mercado;
