import { useState, useCallback } from "react";

export const useCount = ({ initialValue = 0, min = 0, max = 6 }) => {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() => {
    setCount((currentValue) =>
      currentValue === max ? currentValue : currentValue + 1
    );
  }, [max]);

  const decrement = useCallback(() => {
    setCount((currentValue) =>
      currentValue === min ? currentValue : currentValue - 1
    );
  }, [min]);

  return { count, increment, decrement };
};
