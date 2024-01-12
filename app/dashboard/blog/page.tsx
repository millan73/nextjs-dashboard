import Link from 'next/link';
import fs from 'fs';
import { lusitana } from '@/app/ui/fonts';

export default function Blog() {
  const files = fs.readdirSync('./app/posts');

  const fileNames = files.map((filename) => filename.replace('.md', ''));

  return (
    <>
      <div className="w-full">
        <div className="flex w-full items-center justify-between">
          <h1 className={`${lusitana.className} text-2xl`}>
            Här kan du blogga om dina fakturor
          </h1>
        </div>
        {fileNames.map((file) => (
          <Link
            key={file}
            href={`/dashboard/blog/` + file}
            className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            {file}
          </Link>
        ))}
      </div>
    </>
  );
}
