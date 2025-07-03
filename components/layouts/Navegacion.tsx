import Link from 'next/link';

const linksDesktop = [
  { name: 'Inicio', href: '/' },
  { name: 'Sobre Nosotros', href: '/about' },
  { name: 'Blog', href: '/blog' },
];

export default function Navegacion() {
  return (
    <>
      <nav className="hidden md:flex gap-8">
        {linksDesktop.map((enlace) => (
          <Link key={enlace.name} className="link-hover" href={enlace.href} aria-label={enlace.name}>
            {enlace.name}
          </Link>
        ))}
      </nav>

      {/* Mobile Navigation  */}
      <nav className="flex md:hidden gap-4">
        <Link className="link-hover" href="/" aria-label="Inicio">
          Inicio
        </Link>
        <Link className="link-hover" href="/about" aria-label="about">
          About
        </Link>
        <Link className="link-hover" href="/blog" aria-label="blog">
          Blog
        </Link>
        <a href=""></a>
      </nav>
    </>
  );
}
