import { useRef } from 'react';

export default function useDebounce(textInput, timeout) {
  const timeoutRef = useRef(null);

  function debouncedSearch(...args) {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      textInput(...args);
    }, timeout);
  }

  return debouncedSearch;
}

