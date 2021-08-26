import React, {Component} from "react";
import './App.css';
import axios from 'axios';
import Page from "./Page"


export default class App extends Component {
  state = {
    data: [],
    isTrue: [],
    page: 1,
    url: "https://swapi.dev/api/people/?page=",
    paginate: []
  }

  componentDidMount() {
    const getData = async () => {
      await axios.get(this.state.url + this.state.page).then((response) => {
        const data = response.data.results
        this.setState({data})
      })
    }
    getData()
  }

  componentDidUpdate() {
    if (this.state.paginate === true) {
      try {
          const paginate = this.state.url + this.state.page
          axios.get(paginate).then((response) => {
            const data = response.data.results
            this.setState({data})
            this.state.paginate = false
          })
        }
      catch (error) {
        console.log(error)
        }  
      }
  }

  handlePages = async () => {
    const getData = async () => {
      axios.get(this.state.url + this.state.page).then((response) => {
        const myData = response.data.results
        this.setState({myData})
      })
    }
    getData()
  }


  render() {
    const swapiData = this.state.data.map((swapiItems) => {
      let { name, birth_year, height} = swapiItems
      return (
        <div>
          <tr>
            <td>{name}</td>
            <td>{height}</td>
            <td>{birth_year}</td>
          </tr>
        </div>
      )
    })

    return (
      <div>
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
        <Page appState={this.state} paginate={this.handlePages}/>
      </div>

    )
  }
}