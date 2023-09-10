import React, { Component } from "react";
import GlassesItem from "./GlassesItem";

export default class GlassesComponent extends Component {
  arrGlasses = [
    {
      url: "./glassesImage/g1.jpg",
      id: 1,
    },
    {
      url: "./glassesImage/g2.jpg",
      id: 2,
    },
    {
      url: "./glassesImage/g3.jpg",
      id: 3,
    },
    {
      url: "./glassesImage/g4.jpg",
      id: 4,
    },
    {
      url: "./glassesImage/g5.jpg",
      id: 5,
    },
    {
      url: "./glassesImage/g6.jpg",
      id: 6,
    },
    {
      url: "./glassesImage/g7.jpg",
      id: 7,
    },
    {
      url: "./glassesImage/g8.jpg",
      id: 8,
    },
    {
      url: "./glassesImage/g9.jpg",
      id: 9,
    },
  ];

  kiemTraBtn = (id) => {
    this.props.checkBtnOnclick(id);
  }

  render() {
    return (
      <div className="glasses">
        <div className="glassesItem">
          {this.arrGlasses.map((item, index) => {
            return (
              <div key={index}>
                <GlassesItem item={item} kiemTraBtnOnClick={this.kiemTraBtn}/>
              </div>
            );
          })}
          <button className="btn btn-primary btn_cancel" onClick={() => {
            this.kiemTraBtn(10);
          }}>
            Cancel
          </button>
        </div>
      </div>
    );
  }
}
