import Link from 'next/link';

const enlacesRedesSociales = [
  {
    platform: 'instagram',
    username: 'ruta.improvisada',
    icon: 'Instagram',
  },
];

export default function RedesSoaciales() {
  return (
    <>
      <div>
        {enlacesRedesSociales.map(({ platform, username }) => (
          <Link
            key={platform}
            href={`https://www.${platform}.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {platform}
          </Link>
        ))}
      </div>
    </>
  );
}
