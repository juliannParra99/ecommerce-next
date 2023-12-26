import { RefObject, useEffect } from "react";

// useOnClickOutside Hook
// Detects clicks outside a specified DOM element and triggers a handler function.
// - Monitors mousedown and touchstart events to detect clicks/touches outside the element
// - Accepts a reference to the DOM element and a handler function to execute on outside clicks
// - Ensures the handler is called only when the click occurs outside the provided element

type Event = MouseEvent | TouchEvent;

export const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: Event) => void
) => {
  useEffect(() => {
    const listener = (event: Event) => {
      const el = ref?.current;
      if (!el || el.contains((event?.target as Node) || null)) {
        return;
      }

      handler(event); // Call the handler only if the click is outside of the element passed.
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]); // Reload only if ref or handler changes
};