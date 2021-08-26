import logo from './logo.svg';
import React, {Component} from "react";
import Axios from 'axios';
import './App.css';
import axios from 'axios';
import { render } from '@testing-library/react';


export default class App extends Component {
  state = {
    data: [],
    isTrue: [],
    page: 1,
    url: "https://swapi.dev/api/people/?page=",
    searching: false,
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


  render() {
    const swapiData = this.state.data.map((swapiItems) => {
      let { name, height} = swapiItems
      return (
        <tr>
          <td>{name}</td>
          <td>{height}</td>
        </tr>
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
// function App() {
//   const [people, setPeople] = useState("");




//   function getResponse() {
//     Axios.get("https://swapi.dev/api/people").then(function(response) {
//       console.log(response);
//       showNames(response.data);
//     })
//   }

//     function showNames(data) {
//       var names = ""
//       for (var i = 0; i < data.results.length; i++) {
//         names = names + data.results[i].name + "\n";
//       }
//         if (data.next) {
//           getResponse(data.next)
//         }
//         else {
//           console.log(names)
//         }
//     }

//   return (
    
//     <div>
//       Hello <button onClick={getResponse}>Get Star Wars characters</button>
//     {names}
//     </div>
//   );
// }

// export default App;
