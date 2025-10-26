import { Navigate, useParams } from "react-router";

export const RedirectToMenu = ({ id }) => {
  const { restaurantId } = useParams();

  return <Navigate replace to={`/restaurants/${restaurantId}/menu`} />;
};
