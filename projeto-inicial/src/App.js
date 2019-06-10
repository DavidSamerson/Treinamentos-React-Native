import React, {Component} from 'react';
import './App.css';
import David from './david';
import User from './User';
import foto from './imagem.png';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
        name: "David"
    }
    this.changeState = this.changeState.bind(this);
  }

  changeState() {
    this.setState({
      name: "David Samerson"
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">


          <p>Meu Projeto em React Native {this.state.name}</p>
          <button onClick={this.changeState}>Mudar Estado</button>
          <User name="David Samerson 1" photo={foto}></User>
          <User name="David Samerson 2" photo={foto}></User>
          <User name="David Samerson 3" photo={foto}></User>
          <User name="David Samerson 4" photo={foto}></User>
          <User name="David Samerson 5" photo={foto}></User>

        </header>
        <David></David>
      </div>
    );
  }

}

export default App;
