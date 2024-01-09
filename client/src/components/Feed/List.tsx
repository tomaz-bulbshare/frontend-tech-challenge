import React from 'react'

import Loading from '../Loading/Loading'
import Item from './Item'

import callAPI from '../../api'

type listStateProps = {
  items: Array<string | object>,
  loading: boolean,
  loadingMore: boolean,
  currentPage: number,
  nothingToShow: boolean,
}

interface APIResponse {
  data: Record<string, []> 
}

class List extends React.Component<any, listStateProps> {
  state: listStateProps = {
    items: [],
    loading: true,
    loadingMore: false,
    currentPage: 1,
    nothingToShow: false,
  }
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      loading: true,
      loadingMore: false,
      currentPage: 1,
      nothingToShow: false,
    }
    this.onScroll = this.onScroll.bind(this)
  }
  componentDidMount(): void {
    this.loadItems()
    window.addEventListener('scroll', this.onScroll)
  }
  componentWillUnmount(): void {
    window.removeEventListener('scroll', this.onScroll)
  }
  async loadItems(): Promise<void> {
    const { currentPage, items } = this.state
    await callAPI(`?page=${currentPage}`).then(res => {
      if (res) {
        const { data } = res as APIResponse
        const newItems: Object = Object.values(data)
        if (data.length) {
          this.setState({
            items: items.concat(newItems),
            loading: false,
            loadingMore: false,
            nothingToShow: false,
          })
        } else {
          this.setState({
            currentPage: 1,
            nothingToShow: true,
            loadingMore: false,
          })
          window.removeEventListener('scroll', this.onScroll)
        }
      }
    })
  }
  onScroll(): void {
    const { currentPage } = this.state
    if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight) {
      this.setState({ 
        currentPage: currentPage + 1,
        loadingMore: true,
      }, () => {
        this.loadItems()
      })
    }
  }
  render(): React.ReactNode {
    const { loading, loadingMore, items, nothingToShow } = this.state
    return (
      <div id="feed-list">
        { loading && items.length === 0 ? (
          <Loading fullscreen="true" />
        ) : (
          <div id="item-list">
            { Object.keys(items).map(i => (
              <Item 
                key={i}
                item={items[i]}
              />
            ))}
          </div>
        )}
        { nothingToShow && (
          <div className="no-posts">No more posts to show</div>
        )}
        { loadingMore && (
          <Loading />
        )}
      </div>
    ) 
  }
}

export default List
