import React from "react";
import "./style.css";

const clients=['Maharashtra Metal Scrap Tr LLC','Royal clock DWC LLC','Donaldson Company','Ghantoot Group'];

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
    <div style={style.clientListWrapper}>
      <p style={style.clientListNameText}>{clients[0]}</p>
      <p style={style.clientListNameText}>{clients[1]}</p>
      <p style={style.clientListNameText}>{clients[2]}</p>
      <p style={style.clientListNameText}>{clients[3]}</p>
    </div>
  );
  pages.push(
    <div>
      <h2 style={style.header}>OUR CLIENTS</h2>
      <p style={style.description}>View our most frequent clients</p>
    </div>
  );
  pages.push(page1);
  console.log(pages);
  return(pages[index]);
}

export default OurClients;

const style={
  header:{
    color:'#fff'
  },
  description:{
    fontSize:'18px',
    color:'#fff'
  },
  clientListWrapper:{
    display:'flex',
    justifyContent:'center',
    flexWrap:'wrap'
  },
  clientListNameText:{
    color:'#fff',
    fontSize:'20px',
    width:'350px'
  }
}