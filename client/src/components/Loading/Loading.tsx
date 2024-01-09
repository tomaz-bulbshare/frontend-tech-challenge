import React, { FC, ReactElement } from 'react'
import { LoadingContainer, LoadingMessage } from './style'

type LoadingProps = {
  fullscreen?: boolean | string,
}

const Loading: FC<LoadingProps> = ({ fullscreen }): ReactElement => {
  return (
    <LoadingContainer id="loading" fs={fullscreen}>
      <LoadingMessage>
        <img src="./loading.gif" alt="Loading..." />
        Loading
      </LoadingMessage>
    </LoadingContainer>
  )
}

export default Loading
