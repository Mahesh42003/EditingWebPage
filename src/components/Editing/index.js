import {Component} from 'react'
import './index.css'

const options = [
  {
    id: 1,
    activeText: 'Roboto',
  },
  {
    id: 2,
    activeText: 'Lobster',
  },
  {
    id: 3,
    activeText: 'Caveat',
  },
  {
    id: 4,
    activeText: 'Monoton',
  },
  {
    id: 5,
    activeText: 'PlayfairDisplaySC',
  },
]

const fontColours = [
  {
    id: 1,
    colorText: 'gray',
  },
  {
    id: 2,
    colorText: 'blue',
  },
  {
    id: 3,
    colorText: 'green',
  },
  {
    id: 4,
    colorText: 'red',
  },
  {
    id: 5,
    colorText: 'pink',
  },
]

class Editing extends Component {
  state = {
    intialText: '',
    actualFontSize: 16,
    activeColor: fontColours[0].colorText,
    texting: 'Editing Page',
  }

  changingOption = event => {
    this.setState({activeOption: event.target.value})
  }

  submitting = event => {
    event.preventDefault()
    const {activeOption, texting, intialText} = this.state
    this.setState({texting: intialText, intialText: ''})
  }

  changingFont = event => {
    this.setState({activeFont: event.target.value})
  }

  onDecementSize = () => {
    const {actualFontSize} = this.state
    this.setState(prevState => ({
      actualFontSize: prevState.actualFontSize - 1,
    }))
  }

  IncrementSize = () => {
    const {actualFontSize} = this.state
    this.setState(prevState => ({
      actualFontSize: prevState.actualFontSize + 1,
    }))
  }

  changingColor = event => {
    const {activeColor} = this.state
    this.setState({activeColor: event.target.value})
  }

  changing = event => {
    this.setState({intialText: event.target.value})
  }

  render() {
    const {
      intialText,
      activeOption,
      actualFontSize,
      activeColor,
      type,
      texting,
    } = this.state

    const styling = {
      fontSize: `${actualFontSize}px`,
    }
    return (
      <div className="background-image">
        <h3
          className={`${activeOption} ${activeColor} background-color`}
          style={styling}
        >
          {texting}
        </h3>
        <div className="combining-both">
          <div>
            <h3 className="Family-color">Font-Family</h3>
            <select value={activeOption} onChange={this.changingOption}>
              {options.map(each => (
                <option value={each.activeText} key={each.id}>
                  {each.activeText}
                </option>
              ))}
            </select>
          </div>
          <div className="margining">
            <h3 className="Text-color">Text Color</h3>
            <select value={activeColor} onChange={this.changingColor}>
              {fontColours.map(each => (
                <option value={each.colorText} key={each.id}>
                  {each.colorText}
                </option>
              ))}
            </select>
          </div>
        </div>
        <h3 className="font-sizing">Text size</h3>
        <div className="button-flexing">
          <button onClick={this.onDecementSize}>-</button>
          <p className="color">{actualFontSize}</p>
          <button onClick={this.IncrementSize}>+</button>
        </div>
        <form onSubmit={this.submitting} className="Form-displaying">
          <textarea
            rows="10"
            cols="50"
            onChange={this.changing}
            value={`${intialText}`}
            className="top-margin"
          >
            {intialText}
          </textarea>
          <button type="submit" className="button-styling">
            Add Text
          </button>
        </form>
      </div>
    )
  }
}
export default Editing
