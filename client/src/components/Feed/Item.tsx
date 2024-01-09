import React, { FC, ReactElement, useState } from 'react'
import Overlay from '../Overlay/Overlay'
import Media from '../Overlay/Media'
import Comments from '../Comments/Comments'

import { 
  FeedItem, 
  FeedItemHeader, 
  FeedImageContainer, 
  FeedOverlayInner 
} from './style'

type ItemProps = {
  item: any,
}

const Item: FC<ItemProps> = ({
   item,
}): ReactElement => {
  const [isOpen, setIsOpen] = useState(false)

  const {
    briefref,
    brand: {
      name,
      logo,
    },
    feed_title,
    banner_image,
    description,
    starts_on,
    ad_1_image,
    ad_2_image,
  } = item

  // Could be put in utils 
  const formatDate = (date: string) => {
    const newDate = new Date(date)
    return newDate.toLocaleString()
  }

  return (
    <FeedItem className="feed-item">
      <FeedItemHeader>
        <img src={logo} alt={name} />
        <strong>{ name }</strong>
        <a href="#">Join Brief Now</a>
      </FeedItemHeader>
      <FeedImageContainer>
        <button onClick={() => setIsOpen(true)}>
          <img className="img-responsive" src={banner_image} alt={feed_title} />
          <span className="text">{ feed_title }</span>
        </button>
      </FeedImageContainer>
      <Overlay handleClose={() => setIsOpen(false)} isOpen={isOpen}>
        <FeedOverlayInner>
          <div id="overlay_content">
            <div id="media">
              <Media image={banner_image} />
            </div>
            <div id="content">
              <h1>
                {feed_title}
                <span>{formatDate(starts_on)}</span>
              </h1>
              <p>{description}</p>
              <img src={ad_1_image} alt="" className="img-responsive" />
              <img src={ad_2_image} alt="" className="img-responsive" />
            </div>
          </div>
          <div id="comments">
            <Comments briefRef={briefref} brandLogo={logo} brandName={name} />
          </div>
        </FeedOverlayInner>
      </Overlay>
    </FeedItem>
  )
}

export default Item
