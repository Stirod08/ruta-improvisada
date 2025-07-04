import Link from 'next/link';
import Image from 'next/image';
export default function Logo() {
  return (
    <>
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
    </>
  );
}
