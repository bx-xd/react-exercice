import { Component } from "react";

class Hello extends Component {
  constructor(props) {
    super(props);

      this.state = {
        clicked: false
      }
  }
  toggleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    });
  }

  render() {
    return(
      <div className={this.state.clicked ? "clicked" : null} onClick={this.toggleClick}> Hello {this.props.name}</div>
    )
  }
}

export default Hello;
