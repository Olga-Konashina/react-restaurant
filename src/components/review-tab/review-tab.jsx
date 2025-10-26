import { Link } from "../link/link";

export const ReviewTab = ({ id }) => {
  return <Link to={`/restaurants/${id}/review`}>Review</Link>;
};
