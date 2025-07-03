import Link from 'next/link';
import Navegacion from './Navegacion';
import Image from 'next/image';

export default function Header() {
  return (
    <>
      <header className="bg-gray-900 py-4 sticky top-0">
        <div className="container-blog flex justify-between items-center">
          <Link href="/" className="flex items-center link-hover">
            <span className="text-yellow-400 font-extrabold text-4xl -mr-2 md:hidden">!</span>
            <Image
              src="/logo.svg"
              alt="Logo del sitio web, guacamaya de colores rojo, azul, amarrilo y negro"
              width="50"
              height="50"
            />
            <p className="hidden md:block text-2xl text-verde-100">
              <span className="text-yellow-400 font-extrabold text-3xl">!</span>Ruta Improvisada
            </p>
          </Link>
          <Navegacion />
        </div>
      </header>
    </>
  );
}
