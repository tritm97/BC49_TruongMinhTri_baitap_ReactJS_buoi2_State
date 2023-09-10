import React, { Component } from 'react'
import CardComponent from './CardComponent'
import GlassesComponent from './GlassesComponent'

export default class BannerComponent extends Component {
  render() {
    return (
      <section className='banner'>
        <div className="bannerOverlay">
          <div className="container">
            <CardComponent />
          </div>
        </div>
      </section>
    )
  }
}
