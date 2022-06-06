import React, { Component } from 'react';
import Title from './Title';
import './Card.css'

export default class Card extends Component {
    constructor(props){
      super(props);
      this.state = {
        state: this.props.state,
        chapters: this.props.chapters,
        app: "qwerty"
      }    
     // this.kill = this.kill.bind(this);
    }
  
    setApp = (param) => {
      this.setState({app: param});
    }
  
    kill = (param, e) => {
      console.log(e.target.value, param);
      this.setState({state: e.target.value});
    }
  
    rmCharacter = (e) => {
      this.props.rmCharacter(this.props.titulo)
    }
  
    render(){
      console.log(this.state.characters);
      return(
        <div className='card'>
          <button onClick={this.rmCharacter}>Eliminar</button>
          <button onClick={this.upCharacter}>Editar</button>
          <Title setApp = {this.setApp} titulo={this.props.titulo} />      
          <p>{this.state.state}</p>
          <p>{this.props.gender}</p>
          <p>{this.state.chapters}</p>
          <input onChange={this.kill.bind(this, "qwerty")} />
        </div>
      ); 
    }
    
  }