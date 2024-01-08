import { Component } from "react";

class ImageComponent extends Component {
    render() {
        return (
            <img src={this.props.imageSource} alt={this.props.imageAlternative} />
        )
    }
}

export default ImageComponent