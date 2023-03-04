// Write your code here
// eslint-disable-next-line
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {uiMode: 'dark'}

  changeMode = () => {
    this.setState(prevState => {
      if (prevState.uiMode !== 'dark') {
        return {uiMode: 'dark'}
      }
      return {uiMode: 'light'}
    })
  }

  render() {
    const {uiMode} = this.state
    return (
      <div className="appContainer">
        <div
          className={uiMode === 'dark' ? 'darkBackground' : 'lightBackground'}
        >
          <h1 className={uiMode === 'dark' ? 'lightHeading' : 'darkHeading'}>
            Click To Change Mode
          </h1>
          <button className="changeButton" onClick={this.changeMode}>
            {uiMode === 'dark' ? 'Light' : 'Dark'} Mode
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
