import React, { Component } from 'react'

export class Art extends Component {
    render() {
        return (
            <div className="card">
               <h3>{this.props.art.title}</h3>
               <span>{this.props.art.year} - {this.props.art.medium}</span>
               <img src={this.props.art.image} />
               <p>{this.props.art.description}</p>

               
            </div>
        )
    }
}

export default Art
