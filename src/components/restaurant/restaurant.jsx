import { Counter } from "../counter/counter";

export const Restaurant = ({ restaurant }) => {
  const { name, menu, reviews } = restaurant;

  if (!name) {
    return null;
  }

  return (
    <div>
      <h2>{name}</h2>
      {menu.length && (
        <>
          <h3>Menu</h3>
          <ul>
            {menu.map((item) => (
              <li key={item.id}>
                {item.name}
                <Counter />
              </li>
            ))}
          </ul>
        </>
      )}
      {reviews.length && (
        <>
          <h3>Reviews</h3>
          <ul>
            {reviews.map((item) => (
              <li key={item.id}>{item.text}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
