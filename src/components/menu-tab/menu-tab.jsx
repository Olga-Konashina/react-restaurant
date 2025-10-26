import { Link } from "../link/link";

export const MenuTab = ({ id }) => {
  return <Link to={`/restaurants/${id}/menu`}>Menu</Link>;
};
