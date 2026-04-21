import Link from 'next/link';

type SearchParams = {
  next?: string | string[];
};

export default async function LockedPage({
  searchParams,
}: {
  searchParams?: Promise<SearchParams>;
}) {
  const sp = (await searchParams) ?? {};
  const next = typeof sp.next === 'string' ? sp.next : '/';

  return (
    <section className="section">
      <div className="container-narrow">
        <div className="card">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-3 py-1 text-xs font-medium text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900/30 dark:text-neutral-300">
            Sitio en preparación
          </div>

          <h1 className="mt-4 text-3xl sm:text-4xl">
            Estamos preparando el lanzamiento
          </h1>

          <p className="mt-3 text-neutral-700 dark:text-neutral-300">
            Esta web todavía no está disponible públicamente. Si tienes acceso,
            desbloquéala con la clave.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link className="btn btn-primary" href={`/unlock?next=${encodeURIComponent(next)}`}>
              Desbloquear
            </Link>
            <Link className="btn btn-outline" href="/">
              Volver al inicio
            </Link>
          </div>

          <p className="mt-6 text-xs text-neutral-500 dark:text-neutral-400">
            Si eres parte del equipo, entra en <span className="font-mono">/unlock</span>.
          </p>
        </div>
      </div>
    </section>
  );
}

