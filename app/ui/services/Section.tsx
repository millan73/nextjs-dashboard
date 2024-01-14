import { newsArticles } from '@/app/lib/articleData';
import Article from '@/app/ui/services/Article';

let servicesStyle = {
  fontSize: '700',
  color: 'black',
  margin: '10px 0px',
};

let newsStyle = {
  fontSize: '700',
  fontWeight: 'bold',
  color: 'black',
};

export default function Section(props: { headerText: string }) {
  let headTextService = false;

  if (props.headerText == 'Tjänster') {
    headTextService = true;
  }

  return (
    <>
      <div
        style={props.headerText != 'Tjänster' ? newsStyle : servicesStyle}
      ></div>
      <div style={props.headerText != 'Tjänster' ? newsStyle : servicesStyle}>
        {headTextService &&
          props.headerText === 'Tjänster' &&
          newsArticles.map((article) => (
            <Article
              key={article.id}
              headline={article.header}
              body={article.ingress}
            />
          ))}
      </div>
    </>
  );
}
