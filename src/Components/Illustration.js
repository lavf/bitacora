import React, { Component } from 'react';

class Illustration extends Component {
    render() {

        if(this.props.data){
            var illustration= this.props.data.illustration;
        }

        return (
            <section id="illustration">
                <div class="illustration-box">
                    <img src={illustration} alt="dumplings"/>
                </div>
            </section>

);
        }
    }
    
export default Illustration;