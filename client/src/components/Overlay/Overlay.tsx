import React, { ReactElement, FC, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { OverlayContainer } from './style'

type OverlayProps = {
  isOpen: boolean,
  handleClose: () => void,
  children: string | JSX.Element | JSX.Element[],
}

const ReactPortal = ({ children, wrapperId }): JSX.Element => {
  return createPortal(children, document.getElementById(wrapperId) as HTMLElement)
}

const Overlay: FC<OverlayProps> = ({
  isOpen,
  handleClose,
  children,
}): ReactElement | null => {
  useEffect(() => {
    const closeOnEscapeKey = e => e.key === "Escape" ? handleClose() : null
    document.body.addEventListener("keydown", closeOnEscapeKey)
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey)
    };
  }, [handleClose])
  return isOpen ? (
    <ReactPortal wrapperId="overlay">
      <OverlayContainer>
        <button onClick={handleClose} className="close-btn">
          <img src="./close-dialog.svg" alt="Close" />
        </button>
        <div className="overlay-content">{children}</div>
      </OverlayContainer>
    </ReactPortal>
  ) : null
}
export default Overlay
