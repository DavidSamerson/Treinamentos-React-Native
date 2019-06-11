import React, {Component} from 'react';
import './App.css';
import David from './david';
import User from './User';
import foto from './imagem.png';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
        name: "David",
        email: "samerson10@gmail.com"
    }
    this.changeState = this.changeState.bind(this);
    this.changeInput = this.changeInput.bind(this);
  }

  changeState() {
    this.setState({
      name: "David Samerson"
    })
  }

  changeInput(event) {
    let target = event.target;
    let index = target.name;

    this.setState({
      [index]: target.value
    })

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">


          <p>Meu Projeto em React Native {this.state.name}</p>
          <p>{this.state.email}</p>
          <button onClick={this.changeState}>Mudar Estado</button>
          <form>
            <label> Nome: 
              <input
              type = "text"
              name = "name"
              value = {this.state.name} 
              onChange = {this.changeInput} >
              </input>
            </label>
            <label> Email: 
              <input
              type = "email"
              name = "email"
              value = {this.state.email} 
              onChange = {this.changeInput} >
              </input>
            </label>
          </form>
          {/* <User name="David Samerson 1" photo={foto}></User>
          <User name="David Samerson 2" photo={foto}></User>
          <User name="David Samerson 3" photo={foto}></User>
          <User name="David Samerson 4" photo={foto}></User>
          <User name="David Samerson 5" photo={foto}></User> */}

        </header>
        <David></David>
      </div>
    );
  }

}

export default App;
