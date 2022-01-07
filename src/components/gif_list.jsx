import { Component } from 'react';
import Gif from './gif';

class GifList extends Component {
  renderListOfGif = () => {
     return this.props.gifs.map(gif => <Gif id={gif.id} />)
  }
  render() {
    return(
      <div className="gif-list">
        {this.renderListOfGif()}
      </div>
    )
  }
}

export default GifList;
