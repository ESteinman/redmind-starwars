import React, {Component} from "react";
import './App.css';
import axios from 'axios';
import Page from "./Page";
import Table from "./Table";


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
    return (
      <div>
        <Table appState={this.state}></Table>
        <Page appState={this.state} paginate={this.handlePages}/>
      </div>

    )
  }
}