import axios from 'axios'
import { Component } from 'react'

export default class Table extends Component {
    componentDidUpdate() {
        if (this.props.appState.isTrue[0] === true) {
            const search = this.props.appState.data.url
            axios.get(search).then((response) => {
                const data = response.data.results
                this.setState({data})
                this.props.appState.isTrue = false
            })
        }
    }

    render() {
        const swapiData = this.props.appState.data.map((swapiItems) => {
            let { name, birth_year, height, homeworld, mass, species} = swapiItems
            return (
            <div>
                <tr>
                    <td>{name}</td>
                    <td>{birth_year}</td>
                    <td>{height}</td>
                    <td>{homeworld}</td>
                    <td>{mass}</td>
                    <td>{species}</td>
                </tr>
            </div>
            )
        })
            return (
                <table>
                <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Birth Year</th>
                    <th scope="col">Height</th>
                </tr>
                </thead>
                <tbody>
                {swapiData.length > 0 ? (
                    swapiData
                ) : (
                    <tr>
                    <td>No data was found</td>
                    </tr>
                )}
                </tbody>
            </table>
            )
    }
}