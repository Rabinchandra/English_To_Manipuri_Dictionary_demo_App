import React, { Component } from 'react'

export class SearchField extends Component {
    state = {
        value: ''
    }

    onWordInput = (e) => {
        this.props.whileWordTyping(e.target.value);
        this.setState({ value: e.target.value })
    }

    render() {
        return (
            <div className="search-field-container">
                <div>
                    <input 
                        type="text" 
                        className="search-field"
                        placeholder="Type a word here..."
                        spellCheck="false"
                        onKeyUp={ this.onWordInput }

                    />
                    
                    <button 
                        type="buttont"   
                        className="submit"
                        onClick={() => this.props.onFormSubmit(this.state.value) }
                    >
                     <i className="fas fa-search"></i>
                    </button>
                    
                </div>
            </div>
        )
    }
}

export default SearchField
