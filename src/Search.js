import { Component } from 'react'

export default class Search extends Component {
    state = {}

    inputData = (s) => {
        const apicall = s.apicall
        const searchinput = apicall.searchinput
        let searchterm = 'https://swapi.dev/api/people/?search=${searchinput}'
        this.setState({searchterm})
    }
    
    
    handleSubmit = (s) => {
        s.preventDefault()
        this.props.addSearchData(this.state)
        this.props.showSearchData(true)
        document.querySelector(".searchInput").reset()
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
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        )
    }
}