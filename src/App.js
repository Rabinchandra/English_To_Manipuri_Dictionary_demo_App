import React, { Component } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './components/navbar'
import Body from './components/body'
import Sidebar from './components/sidebar'
import About from './components/about'
import Overlay from './components/overlay'

export class App extends Component {
    state = {
        wordList: '',
        searchedWord: '',
        meaning: '',
        matchList: [],
        sideBarOn: true
    }

    matchListStyle = () => {
        if(this.state.matchList.length === 0) {
            return {
                display: 'none'
            }
        }
        return {
            display: 'block'
        }
    }

    async componentDidMount() {
        const res = await fetch('dict.json');
        const resjson = await res.json();
        this.setState({ wordList: resjson });
    }

    
    onFormSubmit = (searchedWord) => {
        const { wordList } = this.state;
        // Filtering out the match word
        const result = wordList.filter(w => searchedWord.toLowerCase() === w.word.toLowerCase());
        // if the searched word is found
        if(result.length !== 0) {
            this.setState({ searchedWord: result[0].word, meaning: result[0].meaning });
        } else if(searchedWord === ''){
            this.setState({ searchedWord: ''})
        } else {
            this.setState({ searchedWord: 'not found'})
        }
        // matchList is set to [] to make sure that
        // matchList box is off
        this.setState({ matchList: [] });
    }

    // While the user the typing the word in the input field
    whileWordTyping = (text) => {
        try {
            let match = [];
            if(text !== '') {
                const { wordList } = this.state;
                match = wordList.filter(w => {
                    const regex = new RegExp(`^${text}`, 'ig');
                    return w.word.match(regex);
                });
            }
    
            this.setState({ matchList: match });
        }
        catch {
            console.log('Error!');
        }
    }

    onMatchWordClick = (e) => {
        // form submitting
        // searchedWord == e.taregt.innerText
        this.onFormSubmit(e.target.innerText);
    }

    sideBarToggle = () => {
        this.setState({ sideBarOn: !this.state.sideBarOn })
    }

    render() {
        return (
            <Router>
            <div>
                <Navbar 
                    wordList={ this.state.wordList }
                    onFormSubmit={ this.onFormSubmit }
                    whileWordTyping={ this.whileWordTyping }
                    sideBarToggle={ this.sideBarToggle }
                />
                <div className="matchList" style={ this.matchListStyle() }>
                    { this.state.matchList.map(m => <div key={ m.id } onClick={ this.onMatchWordClick } className="matchword">{m.word}</div>
                    ) }
                </div>
                <Route exact path="/" render={props => (
                    <React.Fragment>
                        <Body 
                            searchedWord={ this.state.searchedWord }
                            meaning={ this.state.meaning } 
                        />
                    </React.Fragment>
                )} />
                
                <Route path="/about" component={ About }/>

                <Sidebar 
                    sideBarOn={ this.state.sideBarOn }
                    sideBarToggle={ this.sideBarToggle }
                />
                
                <Overlay sideBarOn={ this.state.sideBarOn }/>
            </div>
            </Router>
        )
    }
}

export default App
