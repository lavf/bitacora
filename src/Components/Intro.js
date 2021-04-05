import React, { Component } from 'react';

class Intro extends Component {
  render() {
      
    if(this.props.data){
    var headline = this.props.data.headline;
    var description = this.props.data.description;
    var details_one = this.props.data.details_one;
    var details_two = this.props.data.details_two;
 }

 return (
        <section id="index">
            <h2>{headline}</h2>
            <h3>{description}.</h3>
            <p>{details_one}.</p>
            <p>{details_two}.</p>
            <br />
        </section>
        );
    }
}

export default Intro;