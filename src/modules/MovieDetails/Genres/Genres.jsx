const Genres = ({ items }) => {
  const elements = items.map(({ id, name }) => <li key={id}>{name}</li>);
  return <>{elements ? elements : 'all genres'}</>;
};

export default Genres;
