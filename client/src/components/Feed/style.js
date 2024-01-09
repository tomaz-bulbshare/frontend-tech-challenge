import styled from "styled-components"

const FeedItem = styled.div`
  border-radius: 10px;
  border: #ccc 1px solid;
  margin-bottom: 25px;
  box-shadow: 0 5px 11px rgba(0,0,0,.1);
  overflow: hidden;
  &:last-child {
    margin-bottom: 0;
  }
`
const FeedItemHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  position: relative;
  border-bottom: #ccc 1px solid;
  > img {
    width: 30px;
    border-radius: 50%;
  }
  strong {
    font-size: 16px;
    margin-left: 10px;
  }
  a {
    display: block;
    position: absolute;
    right: 0;
    right: 15px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 12px;
  }
`

const FeedImageContainer = styled.div`
  position: relative;
  button {
    border: 0;
    padding: 0;
    cursor: pointer;
    background: none;
    outline: inherit;
  }
  .text {
    position: absolute;
    bottom: 30px;
    left: 30px;
    right: 30px;
    color: #fff;
    opacity: .8;
    font-size: 30px;
    line-height: 1.1;
    text-shadow: 0px 0px 8px black;
    text-align: left;
    font-weight: bold;
    @media screen and (max-width: 500px) {
      font-size: 20px;
    }
  }
`

const FeedOverlayInner = styled.div`
  display: flex;
  @media screen and (max-width: 767px) {
    display: block;
  }
  #overlay_content {
    overflow: auto;
    -webkit-scroll-snap-type: y mandatory;
      -ms-scroll-snap-type: y mandatory;
          scroll-snap-type: y mandatory;
    width: 65%;
    @media screen and (max-width: 767px) {
      width: 100%;
    }
  }
  #media {
    background: #000;
    height: 100vh;
    width: 100vw;
    padding: 0 20%;
    display: table-cell;
    vertical-align: middle;
    @media screen and (max-width: 767px) {
      height: auto;
      padding: 10% 20%;
    }
    img {
      margin: 0 auto;
    }
  }
  #media, #content {
    /* Was worth a try */
    scroll-snap-align: start;
  }
  #content {
    padding: 50px 40px;
    @media screen and (max-width: 767px) {
      padding: 30px;
    }
    h1 {
      text-align: center;
      line-height: 1.1;
      margin-bottom: 30px;
      color: #02182B;
      font-size: 40px;
      @media screen and (max-width: 767px) {
        font-size: 35px;
      }
      > span {
        margin-top: 10px;
        display: block;
        font-size: 16px;
        color: #999;
      }
    }
    p, img {
      margin-bottom: 30px;
    }
    img {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
    p {
      font-size: 18px;
      color: #666;
    }
    * {
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  #comments {
    background-color: #eee;
    width: 35%;
    @media screen and (max-width: 767px) {
      width: 100%;
    }
  }
`

export {
  FeedItem,
  FeedItemHeader,
  FeedImageContainer,
  FeedOverlayInner,
}
