import { Component } from 'react';

export default class Page extends Component {
    state = {
        page: 1
    }

    nextPage = () => {
        this.props.appState.paginate = true
        this.props.appState.page++
        this.state.page++
        this.props.paginate()
    }

    render() {
        return (
            <div class="column" className="d-flex justify-content-center">
                    {this.state.page < 9 ?
                        (
                            <button id="nextPage" onclick={this.nextPage}type="submit" color="blue">
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