import React from 'react'
import './App.css'
import { HashRouter, Route, Switch } from 'react-router-dom'
import GreatHall from './components/GreatHall'
import About from './components/About'
import House from './components/House'
import MissingPage from './components/404'
import {Howl} from 'howler'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      house: null,
      mainColor: '',
      secondaryColor: ''
    }
    this.updateHouseInfo = this.updateHouseInfo.bind(this)
  }

  updateHouseInfo(newState) {
    this.setState(newState)
  }

  navigateHome() {
    window.location = '/#/'
  }

  playAudio() {
    var sound = new Howl({
      src: ['/smb_gameover.wav']
    })
    sound.play();
    console.log(sound)
    console.log(sound.src)
  };


  
  render() {
    return (
      <HashRouter>
        <div className="App">
        <button onClick={this.playAudio}>Play</button>

          <header onClick={() => this.navigateHome()}>
            <h1>Hoggy Hoggy Hogwarts</h1>
            <img
              src="https://vignette.wikia.nocookie.net/harrypotter/images/a/ae/Hogwartscrest.png/revision/latest?cb=20110806202805"
              alt="hogwarts crest"
            />
          </header>
          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <GreatHall
                  house={this.state.house}
                  updateHouseInfo={this.updateHouseInfo}
                />
              )}
            />
            <Route
              path="/about"
              component={() => <About house={this.state.house} />}
            />
            <Route
              path="/house/:name"
              component={() => (
                <House
                  mainColor={this.state.mainColor}
                  secondaryColor={this.state.secondaryColor}
                />
              )}
            />
            <Route component={MissingPage} />
          </Switch>
        </div>
      </HashRouter>
    )
  }
}

export default App
