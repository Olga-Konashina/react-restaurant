import { UserContainer } from "../user/user-container";

export const Review = ({ text, userId }) => {
  if (!text) {
    return null;
  }

  return (
    <li className="listItem">
      {text} - <UserContainer id={userId} />
    </li>
  );
};
