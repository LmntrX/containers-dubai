import React, {Component} from "react";
import "./style.css";
import './desktop.css';
import './tablet.css';
import './mobile.css';

const images=[
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg"
    ];
class Carousel extends Component{
    state={
        carouselPage:0
    }
    componentDidMount(){
        window.setInterval(()=>{
            let currentIndex=this.state.carouselPage;
            this.setImageSources((currentIndex+1)%images.length);
        },5000)
    }
   
    setImageSources=(index)=>{
        this.setState({
            ...this.state,
            carouselPage:index
        }); 
    }
    
    prepareCarousel=()=>{
        return (
            <div id="div_carousel_home_top_wrapper" className="div_Carousel_GridWrapper">
                <figure><img src={require(`assets/images/carousel/${images[this.state.carouselPage]}`)}/></figure>
            </div>
        );
    }
    render(){
        return(
            <div className="div_Carousel_wrapper">
                {this.prepareCarousel()}
            </div>
        );
    }
}

export default Carousel;
