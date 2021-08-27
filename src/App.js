import React, {Component} from "react";
import './App.css';
import axios from 'axios';
import Page from "./Page";
import Table from "./Table";
import Search from './Search';

export default class App extends Component {
  state = {
    data: [],
    isTrue: [],
    page: 1,
    url: "https://swapi.dev/api/people/?page=",
    paginate: [],
    search: false
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
    if (this.state.isTrue[0] === true) {
      try {
        const search = this.state.data[0].searchterm
        axios.get(search).then((response) => {
          const data = response.data.results
          this.setState({data})
          this.state.isTrue = false
        })
      }
      catch (error) {
        console.log(error)
        }  
      }
      else if ( this.state.paginate === true
        )
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


  handlePages = async () => {
    const getData = async () => {
      axios.get(this.state.url + this.state.page).then((response) => {
        const myData = response.data.results
        this.setState({myData})
      })
    }
    getData()
  }

  addSearchResults = async (searchData) => {
    try 
      {
      const searchResults = await axios.get(searchData.searchterm)
      const data = searchResults.data.results
      this.setState({data, search: true})
    } 
    catch (error) {
      console.log(error)
    }
  }



  render() {
    return (
      <div>
        <Table appState={this.state} searchResults={this.addSearchResults}></Table>
        <Page appState={this.state} paginate={this.handlePages}/>
        <Search appState={this.state}searchResults={this.addSearchResults} ></Search>
      </div>

    )
  }
}