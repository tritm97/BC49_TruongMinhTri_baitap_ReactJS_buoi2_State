import React, { Component } from 'react'

export default class GlassesItem extends Component {
  kiemTraBtn = (id) => {
    this.props.kiemTraBtnOnClick(id);
  }

  render() {
    // console.log(this.props);
    const {url, id} = this.props.item;
    return (
      <div className="glassesImg">
        <button className='glassesButton' id={id} onClick={() => {
          this.kiemTraBtn(id);
        }}>
          <img src={url} alt="" />
        </button>
      </div>
    )
  }
}
