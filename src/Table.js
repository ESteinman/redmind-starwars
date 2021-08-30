import axios from 'axios'
import { Component } from 'react'
import { Responsive, BigScreen, Desktop, Laptop, Mobile, TabletMobile } from './responsive/Responsive';

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
                <tr>
                    <td>{name}</td>
                    <td>{birth_year}</td>
                    <td>{height}</td>
                    <td>{homeworld}</td>
                    <td>{mass}</td>
                    <td>{species}</td>
                </tr>
            )
        })

            return (
                <table className="table">
                        <tr>
                            <th>Name</th>
                            <th>Birth Year</th>
                            <th scope="col">Height</th>
                            <th scope="col">Homeworld</th>
                            <th scope="col">Mass</th>
                            <th scope="col">Species</th>
                        </tr>
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