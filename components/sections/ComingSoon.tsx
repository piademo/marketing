import React from 'react';
import Link from 'next/link';

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary-50 dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-900 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <div className="inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white/70 px-4 py-2 text-xs font-medium text-neutral-700 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-neutral-300">
          Sitio en preparación
        </div>

        <div className="mt-6">
          <div className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
            <span className="gradient-text">
              BookFast
            </span>
          </div>
          <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-900 dark:text-white">
            Próximamente
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-300">
            Estamos preparando el lanzamiento. Vuelve pronto.
          </p>
        </div>

        <div className="mt-10 flex items-center justify-center">
          <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 shadow-lg shadow-primary-500/25 dark:shadow-none" />
        </div>

        <div className="mt-10 text-xs text-neutral-500 dark:text-neutral-400">
          Si eres parte del equipo, entra en{' '}
          <Link className="underline underline-offset-4 hover:text-neutral-800 dark:hover:text-white" href="/unlock">
            /unlock
          </Link>
          .
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
