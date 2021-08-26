import { Component } from 'react';

export default class Page extends Component {
    state = {
        isTrue: [],
        page: 1,
    }

    nextPage = (e) => {
        e.preventDefault()
        this.props.appState.paginate = true
        this.props.appState.page++
        this.state.page++
        this.props.paginate()
    }

    render() {
        return (
            <div className="column" className="d-flex justify-content-center">
                    {this.state.page < 9 ?
                        (
                            <button id="nextPage" onClick={this.nextPage} type="submit">
                                Next
                            </button>
                        ) : 
                        (
                        <button id="nextPage" color="none">
                        </button>
                        )    
                    }         
            </div>

        )
    }
}