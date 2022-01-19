import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello my name is Dillan...
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// CLASS
class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: []
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then( users => this.setState({ monsters: users }) )
  }

  render(){
    return (
      <div className="App">
        {
          this.state.monsters.map( monster => 
            <h1 key={monster.id}> {monster.name} </h1>
          )
        }
      </div>
    );
  }
}

export default App;
