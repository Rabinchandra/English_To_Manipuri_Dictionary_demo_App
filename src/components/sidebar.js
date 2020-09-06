import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Sidebar extends Component {
    sideBarClass() {
        const { sideBarOn } = this.props;
        if(sideBarOn) {
            return 'sidebar'
        }
        return 'sidebar sidebar-on';
    }

    render() {
        const { sideBarToggle } = this.props;
        return (
            <div className={ this.sideBarClass() }>
                <button onClick={ sideBarToggle } className="sideBarBackBtn">
                    <i className="fas fa-arrow-left"></i>
                </button>
                <Link to="/" className="link" onClick={ sideBarToggle }>
                    Home
                </Link>
                <Link to="/about" className="link" onClick={ sideBarToggle }>
                    About
                </Link>
            </div>
        )
    }
}

export default Sidebar
