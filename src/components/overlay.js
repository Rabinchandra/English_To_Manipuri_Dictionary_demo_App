import React, { Component } from 'react'

export class Overlay extends Component {
    overlayClass() {
        if(this.props.sideBarOn) {
            return 'overlay'
        }
        return 'overlay overlay-on'
    }

    render() {
        return (
            <React.Fragment>
                <div className={this.overlayClass()}>
                </div>
            </React.Fragment>
        )
    }
}

export default Overlay
