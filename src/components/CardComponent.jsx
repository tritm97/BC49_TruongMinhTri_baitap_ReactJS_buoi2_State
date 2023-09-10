import React, { Component } from "react";
import GlassesComponent from "./GlassesComponent";

export default class CardComponent extends Component {
  state = {
    name: "Glasses name",
    url: "./glassesImage/QM9pSwS-Imgur.png",
    desc: "Descriptions",
  };

  listGlassesShow = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./glassesImage/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./glassesImage/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./glassesImage/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./glassesImage/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./glassesImage/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./glassesImage/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./glassesImage/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 10,
      price: 0,
      name: "Glasses name",
      url: "./glassesImage/QM9pSwS-Imgur.png",
      desc: "Descriptions",
    },
  ];

  handleBtnOnclick = (id) => {
    console.log("chỗ cần nhận đc id nè", id);
    const thisUrl = this.listGlassesShow[id - 1].url;
    const thisName = this.listGlassesShow[id - 1].name;
    const thisDesc = this.listGlassesShow[id - 1].desc;
    switch (id) {
      case 1 : {
        this.setState({
          url : thisUrl,
          name : thisName,
          desc : thisDesc,
        })
      };
      break;
      case 2 : {
        this.setState({
          url : thisUrl,
          name : thisName,
          desc : thisDesc,
        })
      };
      break;
      case 3 : {
        this.setState({
          url : thisUrl,
          name : thisName,
          desc : thisDesc,
        })
      };
      break;
      case 4 : {
        this.setState({
          url : thisUrl,
          name : thisName,
          desc : thisDesc,
        })
      };
      break;
      case 5 : {
        this.setState({
          url : thisUrl,
          name : thisName,
          desc : thisDesc,
        })
      };
      break;
      case 6 : {
        this.setState({
          url : thisUrl,
          name : thisName,
          desc : thisDesc,
        })
      };
      break;
      case 7 : {
        this.setState({
          url : thisUrl,
          name : thisName,
          desc : thisDesc,
        })
      };
      break;
      case 8 : {
        this.setState({
          url : thisUrl,
          name : thisName,
          desc : thisDesc,
        })
      };
      break;
      case 9 : {
        this.setState({
          url : thisUrl,
          name : thisName,
          desc : thisDesc,
        })
      };
      break;
      case 10 : {
        this.setState({
          url : thisUrl,
          name : thisName,
          desc : thisDesc,
        })
      };
      break;
    }
  };

  render() {
    return (
      <div className="cardImg">
        <div className="img">
          <img
            className="img-fluid img_model"
            src="./../glassesImage/model.jpg"
            alt=""
          />
          <div className="glassesShow">
            <img className="img-fluid" src={this.state.url} alt="" />
          </div>
          <div className="cardContent">
            <h6>{this.state.name}</h6>
            <p>{this.state.desc}</p>
          </div>
        </div>
        <GlassesComponent checkBtnOnclick={this.handleBtnOnclick} />
      </div>
    );
  }
}
