import React, {
  Component
} from 'react';
import logo from './logo.svg';
import api from './utils/api'
import isLocalHost from './utils/isLocalHost'
import './App.css';

class App extends Component {

  componentDidMount() {
      
    api.readAll().then((shioors) => {
      if (shioors.message === 'unauthorized') {
        if (isLocalHost()) {
          alert('FaunaDB key is unauthorized. Make sure you set it in terminal session where you ran `npm start`. Visit http://bit.ly/set-fauna-key for more info')
        } else {
          alert('FaunaDB key is unauthorized. Verify the key `FAUNADB_SECRET` set in Netlify enviroment variables is correct')
        }
        return false
      }

      console.log('all shioors', shioors)
      this.setState({
        shioors: shioors
      })
    })
  }

  render() {
    return ( <
      div className = "App" >
      <
      header className = "App-header" >
      <
      img src = {
        logo
      }
      className = "App-logo"
      alt = "logo" / >
      <
      p >
      Edit < code > src / App.js < /code> and save to reload. <
      /p> <
      a className = "App-link"
      href = "https://reactjs.org"
      target = "_blank"
      rel = "noopener noreferrer" >
      Learn React FAUNADB NETLIFY SERVERLESS FUNCTIONS  <
      /a> <
      /header> <
      /div>
    );
  }
}

export default App;