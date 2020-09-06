import React, { Component } from 'react'
import SearchField from './searchfield'

export class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="toggle-bar" onClick={ this.props.sideBarToggle }>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="navbrand">
                    English To Manipuri Dictionary
                </div>
                <SearchField 
                    wordList={ this.props.wordList }
                    onFormSubmit={ this.props.onFormSubmit }
                    whileWordTyping={ this.props.whileWordTyping }
                />
                
            </div>
        )
    }
}

export default Navbar
