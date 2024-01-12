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
    .readFileSync(path.join('./app/posts', params.slug + '.md'))
    .toString();

  const parsedMarDown = matter(contents);

  const htmlString = marked.parse(parsedMarDown.content);

  return {
    htmlString,
    data: parsedMarDown.data,
  };
}

export default function Page({ params }: Params) {
  const markDown = fetchBlogInfo({ params });

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: markDown.htmlString }} />
    </>
  );
}
