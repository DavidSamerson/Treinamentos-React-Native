import React, {Component} from 'react';
import './App.css';
import David from './david';
import User from './User';
import foto from './imagem.png';
import Lista from './Lista';

class appClone extends Component {

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
      <div className="appClone">
        <header className="appClone-header">


          <p>Meu Projeto em React Native</p>
          <p> {this.state.name}</p>
          <p>{this.state.email}</p>
          <button onClick={this.changeState}>Mudar Estado</button>
          <form>
            <p>
              <label> Nome: 
              <input
              class="name"
              type = "text"
              name = "name"
              value = {this.state.name} 
              onChange = {this.changeInput} >
              </input>
            </label>
            </p>
            <p>
            <label> Email:
              <input 
              class="email"
              type = "email"
              name = "email"
              value = {this.state.email} 
              onChange = {this.changeInput} >
              </input>
            </label>
            </p>
          </form>
          <Lista></Lista>
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

export default appClone;
