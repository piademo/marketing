import { Suspense } from 'react';
import AltaClient from './AltaClient';

export default function AltaPage() {
  return (
    <Suspense>
      <AltaClient />
    </Suspense>
  );
}

