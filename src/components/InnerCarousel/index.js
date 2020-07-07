import React from 'react'
import Card from '../Card'

class InnerCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    }
  }

  async componentDidUpdate() {
    const searchResults = this.props.inputValue
    const getData = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=+${searchResults}`)
    const getDataJson = await getData.json()
    console.log(getDataJson)

    this.setState({
      products: getDataJson.results
    })
  }

  render() {
    return (
      <div>
        {this.state.products.map((product, key) => {
          return (
          <Card products={this.state.products} key={key} product={product}/>
          )
        })}
      </div>
    ) 
  }
}

export default InnerCarousel