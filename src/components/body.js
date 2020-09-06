import React, { Component } from 'react'

export class Body extends Component {

    showBodyDetails() {
        if(this.props.searchedWord === '') {
            return (
                ''
            );
        } else if(this.props.searchedWord !== 'not found') {
            return (
                <React.Fragment>
                    <div className="searched-word">
                        Searched Word:
                        <strong>{ this.props.searchedWord }</strong>
                    </div>
                    <div className="meaning">
                        Meaning:
                        <strong>
                            { this.props.meaning }
                        </strong>
                    </div>
                </React.Fragment>
            );
        } else {
            return (
                <h4>Sorry! The searched word is not found!</h4>
            );
        }
    }

    render() {
        return (
            <div className="body">
                { this.showBodyDetails() }
            </div>
        )
    }
}

export default Body
