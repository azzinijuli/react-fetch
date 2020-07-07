import React from 'react' 
import InnerCarousel from '../InnerCarousel'
import Title from '../Title'

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      products: []
    }
  }

  handleChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleClick() {
    console.log(this.state.inputValue)
  }

  
  render() {
    return (
      <React.Fragment>
        <input onChange={(e) => this.handleChange(e)} type="text" />
        <button onClick={() => this.handleClick()}>Buscar</button>
        <Title />
        <InnerCarousel inputValue={this.state.inputValue}/>
      </React.Fragment>
      )
    }
}

export default Carousel