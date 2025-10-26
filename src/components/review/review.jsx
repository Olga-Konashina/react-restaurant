export const Review = ({ text, id }) => {
  if (!text) {
    return null;
  }

  return (
    <li className="listItem" key={id}>
      {text}
    </li>
  );
};
