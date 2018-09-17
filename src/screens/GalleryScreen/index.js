import React from "react";
import "./style.css";
import Gallery from "components/UI/Gallery";
import ItemList from './ItemList';
const images = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
const listData=[
  {
    header:'Dry',
    subHeader:'CONTAINERS',
    items:[{label:'20ft DV', status:'Available'},{label:'40ft DV', status:'Available'},{label:'40ft HC', status:'Available'},{label:'45ft', status:'Available'}],
    legends:['DV - Dry Van Containers','HC - High Cube Containers']
  },
  {
    header:'Reefers',
    subHeader:'CONTAINERS',
    items:[{label:'20ft HRF', status:'Available'},{label:'40ft HRF', status:'Available'}],
    legends:['HRF - High Cube Reefers ']
  },
  {
    header:'Special Equipments',
    subHeader:'CONTAINERS',
    items:[{label:'20ft OT', status:'Available'},{label:'40ft OT', status:'Available'},{label:'20ft FR', status:'Available'},{label:'40ft FR', status:'Available'}],
    legends:['DV - Dry Van Containers','HC - High Cube Containers']
  }
];

const GalleryScreen = () => (
  <div className="GalleryScreen">
    <h2>Gallery</h2>
    <span>A sneak peak into our yard!!</span>
    <div className="availableItems">
      <ItemList data={listData[0]}></ItemList>
      <ItemList data={listData[1]}></ItemList>
      <ItemList data={listData[2]}></ItemList>
    </div>
    <div className="div_gallery_spacer"></div>
    <Gallery images={images} />
  </div>
);

export default GalleryScreen;