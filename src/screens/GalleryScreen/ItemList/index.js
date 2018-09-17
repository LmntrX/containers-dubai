import React from 'react';
import './style.css';

const ItemList=(props)=>{
    return(
        <div className="div_ItemList_wrapper_gallery">
            <div className="div_ItemList_gallery_box">
                <div className="div_ItemList_gallery_header">
                    <p>{props.data.header}</p>
                    <p>{props.data.subHeader}</p>
                </div>
                <div className="line"></div>
                <div className="div_ItemList_gallery_list">
                    {props.data.items.map((itm,i,arr)=>{
                        return(
                            <div className="div_ItemList_row">
                                <p>{itm.label}</p>
                                <p>{itm.status}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="div_ItemList_gallery_legend">
                    {props.data.legends.map((itm)=>{
                        return(
                            <p className="p_ItemList_legend">{itm}</p>
                        );
                    })}
            </div>
        </div>
    );
}

export default ItemList;