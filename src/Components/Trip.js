import React, { Component } from 'react';

class Trip extends Component {
    render() {

        if(this.props.data){
        var image_hor_one= this.props.data.image_hor_one;
        var image_hor_two= this.props.data.image_hor_two;
        var image_hor_three= this.props.data.image_hor_three;
        var image_hor_four= this.props.data.image_hor_four;
        var image_hor_five= this.props.data.image_hor_five;
        var image_hor_six= this.props.data.image_hor_six;
        var image_ver_one= this.props.data.image_ver_one;
        var image_ver_two= this.props.data.image_ver_two;
        var image_ver_three= this.props.data.image_ver_three;
        }

    

        return (
            <section id="trip">
                <div id="wrap">
                    <div class="big_col">
                        <div class="small_img">
                            <img src={image_hor_one} alt="" />
                            <img src={image_ver_one} alt="" />
                        </div>
                        <div class="small_col small_img">
                            <img src={image_hor_two} alt="" />
                        </div>
                        <div class="small_img">
                        </div>
                    </div>
                    <div class="big_col">
                        <img src={image_ver_two} alt="" />
                        <img src={image_hor_three} alt="" />
                        <img src={image_hor_four} alt="" />
                    </div>
                    <div class="small_col small_img">                        
                        <img src={image_hor_five} alt="" />
                        <img src={image_ver_three} alt="" />
                        <img src={image_hor_six} alt="" />
                    </div>                    
                </div>

              
            </section>

            );
        }
    }
    
export default Trip;