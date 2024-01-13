'use client';
import Coworkers from '@/app/ui/about/Coworkers';
import { lusitana } from '@/app/ui/fonts';

export default function Page() {
  return (
    <main>
      <h1
        className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
      >
        Vi som arbetar på Acme
      </h1>
      <Coworkers />
    </main>
  );
}
