import { useEffect, useRef } from "react";

export function useScrollPosition(
  callback: (position: { top: number; height: number }) => void
): (dom: HTMLElement | null) => void {
  const callbackRef = useRef(callback);
  const domRef = useRef<HTMLElement | null>(null);

  callbackRef.current = callback;

  function onScroll(event: Event) {
    const { scrollTop: top, offsetHeight: height } =
      event.target as HTMLElement;

    callbackRef.current?.({ top, height });
  }

  useEffect(() => {
    const dom = domRef.current;

    return () => {
      dom?.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (dom) => {
    domRef.current = dom;

    if (dom) {
      dom.addEventListener("scroll", onScroll);
    }
  };
}
