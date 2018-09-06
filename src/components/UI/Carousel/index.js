import React, {Component} from "react";
import "./style.css";
import './desktop.css';

const images=[
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg"
    ];
class Carousel extends Component{
    state={
        carouselPage:0
    }
    componentDidMount(){
        window.setInterval(()=>{
            let currentIndex=this.state.carouselPage;
            this.setImageSources((currentIndex+3)%images.length);
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
                <figure><img src={require(`assets/images/carousel/${images[this.state.carouselPage+1]}`)}/></figure>
                <figure><img src={require(`assets/images/carousel/${images[this.state.carouselPage+2]}`)}/></figure>
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
