export const Review = ({ text }) => {
  if (!text) {
    return null;
  }

  return <li className="listItem">{text}</li>;
};
