import { Component } from "react";
import Search from './search'
import Gif from './gif'

class Left extends Component {
  render() {
    return (
      <div className="left">
        <Search />
        <Gif />
      </div>
    )
  }
}

export default Left;
