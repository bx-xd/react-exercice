import { Component } from "react";
import GifList from "./gif_list";

class Right extends Component {
  render() {
    const gifs = [
      { id: "ZJjs83nX1Z87EWvGCp"},
      { id: "p2TNAx7KFxcZ46o7pu"}
    ]
    return (
      <div className="right">
        <GifList gifs={gifs}/>
      </div>
    )
  }
}

export default Right;
