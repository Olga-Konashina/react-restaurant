import { Button } from "../button/button";

export const Tab = ({ title, onClick, isActive }) => {
  return <Button title={title} onClick={onClick} disabled={isActive} />;
};
