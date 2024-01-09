import React, { FC, ReactElement } from 'react'

type MediaProps = {
  image: string,
}

const Media: FC<MediaProps> = ({
  image,
}): ReactElement => {
  return (
    <div className="feed-image">
      <img src={image} alt="" className="img-responsive" />
    </div>
  )
}

export default Media
