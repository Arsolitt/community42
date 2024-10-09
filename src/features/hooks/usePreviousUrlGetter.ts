import { useEffect, useRef } from "react"

export function usePreviousUrlGetter<T = any> (state: T) {
  const previousValueRef = useRef<T>(state);
  useEffect(() => {
    previousValueRef.current = state;
  }, [state])

  return previousValueRef.current ?? null;
}
