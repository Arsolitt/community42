import { useEffect, useRef } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function usePreviousUrlGetter<T = any>(state: T) {
  const previousValueRef = useRef<T>(state);
  useEffect(() => {
    previousValueRef.current = state;
  }, [state]);

  return previousValueRef.current ?? null;
}
