import styled from "styled-components"

const OverlayContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  .close-btn {
    border: 0;
    position: absolute;
    background: transparent;
    top: 25px;
    left: 25px;
    cursor: pointer;
    &:hover {
      opacity: .8;
    }
  }
`

export {
  OverlayContainer,
}
