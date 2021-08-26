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
    searching: false,
    showPages: [],
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

  Page = async () => {
    const page = async () => {
      axios.get(this.state.url + this.state.page).then((response) => {
        page = response.data.results
        this.setState({page})
      })
    }
  }


  render() {
    const swapiData = this.state.data.map((swapiItems) => {
      let { name, height} = swapiItems
      return (
        <div>
          <tr>
            <td>{name}</td>
            <td>{height}</td>
          </tr>
          <Page appState={this.state} showPages={this.showPages}/>
        </div>


      )
    })
    return (
      <table>
        <thead>
          <tr>
            <th scope="col">Name</th>
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