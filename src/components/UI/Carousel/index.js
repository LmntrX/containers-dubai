import React, {Component} from "react";
import "./style.css";

const images=[
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg"
    ];
class Carousel extends Component{
    state={
        carouselPage:0
    }
    style={
        carouselInnerWrapper:{
            display:'flex',
            justifyContent:'space-around',
        },
        image:{
            height:'160px',
            width:'240px',
            borderRadius:'5px',
            objectFit:'cover'
        },
        wrapper:{
            marginTop:'50px',
            padding:'0px 100px'
        }
    }
    componentDidMount(){
        window.setInterval(()=>{
            let currentIndex=this.state.carouselPage;
            this.setImageSources((currentIndex+3)%images.length);
        },2000)
    }
    setImageSources=(index)=>{
        // document.getElementById('div_carousel_home_top_wrapper').ani
        this.setState({
            ...this.state,
            carouselPage:index
        });
    }
    prepareCarousel=()=>{
        return (
            <div style={this.style.carouselInnerWrapper} id="div_carousel_home_top_wrapper">
                <img src={require(`assets/images/gallery/${images[this.state.carouselPage]}`)} style={this.style.image}/>
                <img src={require(`assets/images/gallery/${images[this.state.carouselPage+1]}`)} style={this.style.image}/>
                <img src={require(`assets/images/gallery/${images[this.state.carouselPage+2]}`)} style={this.style.image}/>
            </div>
        );
    }
    render(){
        return(
            <div style={this.style.wrapper}>
                {this.prepareCarousel()}
            </div>
        );
    }
}

export default Carousel;
