import styled from "styled-components"

const CommentsContainer = styled.div`

`

const CommentsHead = styled.div`
  background: #fff;
  display: flex;
  align-items: center;
  position: relative;
  padding: 25px;
  border-bottom: #ccc 1px solid;
  @media screen and (max-width: 767px) {
    border-top: #ccc 1px solid;
  }
  > img {
    width: 30px;
    border-radius: 50%;
  }
  strong {
    font-size: 16px;
    margin-left: 10px;
  }
`

const CommentList = styled.div`
  padding: 30px;
  .loading, .no-comments {
    font-weight: bold;
  }
  ul {
    > li {
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      border-bottom: #ccc 1px solid;
      padding: 15px 0;
      position: relative;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 15px;
      }
      &:first-child {
        padding-top: 0;
      }
      &:last-child {
        margin-bottom: 0;
        padding-bottom: 0;
        border-bottom: 0;
      }
    }
  }
`

export {
  CommentsContainer,
  CommentsHead,
  CommentList,
}