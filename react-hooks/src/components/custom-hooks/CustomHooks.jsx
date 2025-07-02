import { useFetch } from './useFetch';

const CustomHooks = () => {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users');

  return (
    <div className="custom-hooks">
      <h1>Custom Hooks</h1>
      <p>Custom hooks are a powerful feature in React that allow you to extract component logic into reusable functions.</p>
      <p>They enable you to share stateful logic between components without changing the component hierarchy.</p>
      <p>Custom hooks can be used to encapsulate complex logic, manage state, or handle side effects.</p>

      <h2>Example: Fetching Data with a Custom Hook</h2>
      { 
        data && data.length > 0 ? (
          <ul>
            {data.map(user => (
              <li key={user.id}>
                <h3>{user.name}</h3>
                <p>{user.username}</p>
              </li>
            ))}
          </ul>
        ) : loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          <p>No data available.</p>
        )
      }
    </div>
  );
}

export default CustomHooks;