export const Reviews = ({ reviews }) => {
  return (
    <>
      <h3>Reviews</h3>
      <ul>
        {reviews.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </>
  );
};
