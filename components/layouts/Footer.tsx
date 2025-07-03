import RedesSoaciales from '../UI/RedesSoaciales';

export default function Footer() {
  const today = new Date();
  return (
    <>
      <footer className="py-8 px-4 bg-gray-900 text-verde-100 text-center">
        &copy; {today.getFullYear()} !Ruta Improvisada. Todos los derechos reservados.
        <div className="flex justify-center ">
          <RedesSoaciales />
        </div>
      </footer>
    </>
  );
}
