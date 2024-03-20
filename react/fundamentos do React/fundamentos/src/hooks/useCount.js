import { useContext } from "react";
import { ContextCount } from "../contexts/ContextCount";

export const useCount = () => {
  const { count, setCount } = useContext(ContextCount);
  const addCount = () => {
    setCount((ev) => ev + 1);
  };
  const currentCount = count;
  return { addCount, currentCount };
};
