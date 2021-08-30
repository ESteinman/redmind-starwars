import { Component } from 'react'

export default class Search extends Component {
    state = {}

    inputData = (s) => {
        const target = s.target
        const value = target.value
        let searchInput = `https://swapi.dev/api/people/?search=${value}`
        this.setState({searchInput})
    }
    
    
    handleSubmit = (s) => {
        s.preventDefault()
        this.props.searchResults(this.state)
        this.props.toggleResults(true)
        document.querySelector(".searchInput").reset()
    }

    resetData = () => {
        let defaultData = "https://swapi.dev/api/people"
        this.props.searchResults({defaultData})
    }

    render() {
        return (
            <div className="searchBar">
                <form className="searchInput">
                    <div className="form-row align-center">
                        <div className="col-auto">
                            <label>Search</label>
                            <input 
                                type="text" 
                                className="for-control ml-2" 
                                id="inlineFormInput" 
                                placeholder="Search" 
                                onChange={this.inputData}>
                            </input>
                            <div className="col-auto" id="searchButton">
                                <button onClick={this.handleSubmit}
                                type="submit">
                                    Submit
                                </button>
                                {this.props.appState.search === true ? (
                                <div className="col-auto" id="resetDataButton">
                                    <button onClick={this.resetData} type="submut">
                                        Back to All Data    
                                    </button>
                                </div>
                                ) : (
                                    <button id="searchButton" type="submit" className="disabled">
                                    </button>
                                )
                                }

                            </div>
                            
                        </div>
                    </div>

                </form>
            </div>
        )
    }
}