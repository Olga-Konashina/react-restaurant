import { useGetUsersQuery } from "../../redux/services/api";
import { User } from "./user";

export const UserContainer = ({ id }) => {
  const { isLoading, isError, data } = useGetUsersQuery();

  if (isLoading) {
    return "loading...";
  }

  if (isError) {
    return "error";
  }

  const user = data?.find((item) => item.id === id);

  if (!user?.name) {
    return null;
  }

  return <User name={user.name} />;
};
