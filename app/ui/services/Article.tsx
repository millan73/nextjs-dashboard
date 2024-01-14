export default function Article(props: { headline: string; body: string }) {
  let servicesStyle = {
    margin: '10px 0px',
  };
  return (
    <>
      <div style={servicesStyle}>
        <div className=" rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
          <h3>{props.headline}</h3>
          <p>{props.body}</p>
          <a href="#">Läs mer här</a>
        </div>
      </div>
    </>
  );
}
