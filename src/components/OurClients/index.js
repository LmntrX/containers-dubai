import React from "react";
import "./style.css";
import './desktop.css';
import './tablet.css';
const clients=[
  'Maharashtra Metal Scrap Tr LLC',
  'Royal clock DWC LLC',
  'Donaldson Company',
  'Ghantoot Group',
  'Al Aujan & Oasis LLC',
  'Al Jaber Group',
  'Ali & Sons Co. LLC',
  'TRISTAR ENGINEERING & CONSTRUCTION',
  'Gulf Prefab Houses Factory LLC',
  'FASCO CONSTRUCTION LLC'
];

class OurClients extends React.Component{
  constructor(){
    super();
    this.state={
      currentPage:0
    }
  }

  next=()=>{
    this.setState({
      ...this.state,
      currentPage:(prepareSlider(this.state.currentPage+1)?this.state.currentPage+1:this.state.currentPage)
    })
  }

  prev=()=>{
    this.setState({
      ...this.state,
      currentPage:(prepareSlider(this.state.currentPage-1)?this.state.currentPage-1:this.state.currentPage)
    })
  }

  render(){
    return(
      <section className="OurClients">
        <div onClick={this.prev}>
          <img src={require(`assets/images/arrow.svg`)} alt="Left Arrow" />
        </div>
        <div>
          {prepareSlider(this.state.currentPage)}
        </div>
        <div onClick={this.next}>
          <img
            src={require(`assets/images/arrow.svg`)}
            alt="Right Arrow"
            style={{ transform: "rotate(180deg)" }}
          />
        </div>
      </section>
    );
  }
}

const prepareSlider=(index)=>{
  let pages=[];
  let page1=(
    <div className="div_OurClients_clientListWrapper">
      <p>{clients[0]}</p>
      <p>{clients[1]}</p>
      <p>{clients[2]}</p>
      <p>{clients[3]}</p>
    </div>
  );
  let page2=(
    <div className="div_OurClients_clientListWrapper">
      <p>{clients[4]}</p>
      <p>{clients[5]}</p>
      <p>{clients[6]}</p>
      <p>{clients[7]}</p>
    </div>
  );
  let page3=(
    <div className="div_OurClients_clientListWrapper">
      <p>{clients[8]}</p>
      <p>{clients[9]}</p>
    </div>
  );
  pages.push(
    <div>
      <h2 className="h2_OurClients_header">OUR CLIENTS</h2>
      <p className="h2_OurClients_description">View our most frequent clients</p>
    </div>
  );
  pages.push(page1);
  pages.push(page2);
  pages.push(page3);
  return(pages[index]);
}

export default OurClients;