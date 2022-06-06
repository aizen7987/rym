import React, { Component } from 'react';
import characters from './CharactersList.json'

import Form  from './Form';
import Card from './Card';

export default class Characters extends Component{
    constructor(props){
      super(props);
      this.state = {
        characters: characters.results
      }    
    }
  
    extractChapters = (chapters) => {
      let res = [];
      chapters.map((ch,i) =>
        res.push(ch.split("/").slice(-1)[0])
      )
      return res.join(",");
    }
  
    addCharapter = (character) => {
      this.setState({characters: [...this.state.characters, character]});
    }
  
    rmCharacter = (name) => {
      let copy = [...this.state.characters];
      let index = -1;
      copy.forEach((ch, i) => {
        if(ch.name === name){
          index = i;
        }
      })
      copy.splice(index, 1);
      this.setState({characters: copy});
    }
  
    render(){
      return(
        <div>
          <Form addCharapter= {this.addCharapter} name="Rick" />
          {this.state.characters.map((ch, i) =>
            <Card 
                rmCharacter = {this.rmCharacter}
                key={i} 
                titulo={ch.name} 
                state = {ch.status} 
                gender = {ch.gender} 
                chapters={this.extractChapters(ch.episode)} />
          )}
        </div>
      );
    }
  }