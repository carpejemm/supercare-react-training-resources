const Items = ({ fullName }) => {

  const items = ['Rice', 'Chicken', 'Cookie', 'Ice Cream', 'Pizza'];

  return (
    <div>
      <h1>Items Component</h1>
      <p>This component is used to display items.</p>
      <ol>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
      {fullName}
    </div>
  );
}

export default Items;