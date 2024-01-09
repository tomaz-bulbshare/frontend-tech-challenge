import React, { FC, ReactElement, useState, useEffect } from 'react'
import callAPI from '../../api'

import { 
  CommentsContainer,
  CommentsHead,
  CommentList,
} from './style'

type CommentsProps = {
  briefRef: string,
  brandLogo: string,
  brandName: string,
}

interface APIResponse {
  data: Record<string, []> 
}

const Comments: FC<CommentsProps> = ({
  briefRef,
  brandName,
  brandLogo
}): ReactElement => {
  const [comments, setComments] = useState({})
  const [noComments, setNoComments] = useState(false)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function fetchComments() {
      await callAPI(`comments/${briefRef}`).then(res => {
        if (res) {
          const { data } = res as APIResponse
          if (data.noComments) {
            setNoComments(true)
          } else {
            setComments(data)
          }
          setLoading(false)
        }
      })
    }
    fetchComments()
  }, [briefRef])
  return (
    <CommentsContainer>
      <CommentsHead>
        <img src={brandLogo} alt={brandName} />
        <strong>{ brandName }</strong>
      </CommentsHead>
      <CommentList>
        { loading ? (
          <span className="loading">Loading comments...</span>
        ): (
          <ul>
            {Object.keys(comments).map(i => (
              <li>
                <img src={comments[i].user.avatar} alt="" />
                {comments[i].comment}
              </li>
            ))}
          </ul>
        )}
        { noComments && (
          <span className="no-comments">No comments</span>
        )}
      </CommentList>
    </CommentsContainer>
  )
}

export default Comments
