import Logo from '../UI/Logo';
import Navegacion from './Navegacion';

export default function Header() {
  return (
    <>
      <header className="bg-gray-900 py-4 sticky top-0">
        <div className="container-blog flex justify-between items-center">
          <Logo />
          <Navegacion />
        </div>
      </header>
    </>
  );
}
