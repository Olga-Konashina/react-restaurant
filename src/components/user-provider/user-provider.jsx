import { useCallback, useState } from "react";
import { UserContext } from ".";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const toggleUser = useCallback(
    () => setUser((current) => (current === "" ? "ivan" : "")),
    []
  );
  return <UserContext value={{ user, toggleUser }}>{children}</UserContext>;
};
