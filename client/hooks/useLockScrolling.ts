import * as React from "react";

export function useLockScrolling(locked: boolean): void {
  React.useEffect(() => {
    document.body.style.overflow = locked ? "auto" : "hidden";
  }, [locked]);
}
