import { Component } from 'react';

import { CardList } from './components/card-list/card-list.component'

import './App.css';

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
        <CardList monsters={this.state.monsters}> 
          
         </CardList>
        
      </div>
    );
  }
}

export default App;
