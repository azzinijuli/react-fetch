import React from 'react'

class Card extends React.Component {
  render() {
    return(
      <React.Fragment>
        <p>Título: {this.props.product.title}</p>
        <p>Precio: {this.props.product.price}</p>
        <img src={this.props.product.thumbnail} alt='producto'></img>
      </React.Fragment>
        
    )
  }
}

export default Card