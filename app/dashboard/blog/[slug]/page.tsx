import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

type Params = {
  params: {
    slug: string;
    contents: string;
  };
};

export async function generateMetadata({ params }: Params) {
  return { title: `Post: ${params.slug}` };
}

function fetchBlogInfo({ params }: Params) {
  const contents = fs
    .readFileSync(path.join('app/lib/posts', params.slug + '.md'))
    .toString();

  const parsedMarDown = matter(contents);
  const htmlString = marked.parse(parsedMarDown.content);

  console.log('parsed: ' + parsedMarDown.content);

  return {
    htmlString,
    data: parsedMarDown.data,
  };
}

export default function Page({ params }: Params) {
  const markDown = fetchBlogInfo({ params });

  return (
    <>
      <h1>{params.slug}</h1>
      <div dangerouslySetInnerHTML={{ __html: markDown.htmlString }} />
    </>
  );
}
