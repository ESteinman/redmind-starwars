import { Component } from 'react';

export default class Page extends Component {
    state = {
        isTrue: [],
        page: 1,
        search: this.props.appState.search,
    }

    nextPage = (defaultpage) => {
        defaultpage.preventDefault()
        this.props.appState.paginate = true
        this.props.appState.page++
        this.state.page++
        this.props.paginate()
    }

    previousPage = (defaultpage) => {
        defaultpage.preventDefault()
        this.props.appState.paginate = true
        this.props.appState.page--
        this.state.page--
        this.props.paginate()
    }

    render() {
        return (
            <div className="column">
                <div className="d-flex justify-content-center">
                    <div className="col-auto center">
                    {this.state.page > 1 ?? this.props.appState.search === false ?
                        (
                            <button id="previousPage" onClick={this.previousPage} type="submit">
                                Previous
                            </button>
                        ) :
                            
                        (
                            <button id="previousPage" color="none">
                            </button>
                        )
                    }
                        {this.state.page < 9 && this.props.appState.search === false ?
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
                </div>       
            </div>

        )
    }
}