import styled from "styled-components"

const LoadingContainer = styled.div`
  text-align: center;
  position: ${props => props.fs ? "fixed" : "relative"};
  top: ${props => props.fs ? "50%" : 0};
  left: ${props => props.fs ? "50%" : 0};
  transform: translate(${props => props.fullScreen ? "-50%, -50%" : 0});
  margin: ${props => !props.fs ? "20px 0" : 0};
`

const LoadingMessage = styled.p`
  font-weight: bold;
  color: #999;
  font-size: 18px;
  > img {
    width: 30px;
    display: block;
    margin: 0 auto 5px auto;
  }
`

export {
  LoadingContainer,
  LoadingMessage
}
