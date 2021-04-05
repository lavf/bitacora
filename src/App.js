import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Intro from './Components/Intro';
import Trip from './Components/Trip';
import Illustration from './Components/Illustration';
import Contact from './Components/Contact';

class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        foo: 'bar',
        tripData: {}
      };
    }
    getTripData(){
      $.ajax({
        url:'./tripData.json',
        dataType:'json',
        cache: false,
        success: function(data){
          this.setState({tripData: data});
        }.bind(this),
        error: function(xhr, status, err){
          console.log(err);
          alert(err);
        }
      });
  }

  componentDidMount(){
    this.getTripData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.tripData.main}/>
        <Intro data={this.state.tripData.intro}/>
        <Trip data={this.state.tripData.trip}/>
        <Illustration data={this.state.tripData.illustration}/>
        <Contact data={this.state.tripData.contact}/>
      </div>
    );
  }
}

export default App;
