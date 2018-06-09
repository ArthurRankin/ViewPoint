import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './main.css';
import Login from './components/loginPage/Login';
import Questionare from './components/questionare/Questionare';
import { rebase }  from './components/DBInteractions/base';


class App extends Component {

    state = {
      authed: false,
      user: null
    }

  componentDidMount = () => {
    this.authListener = rebase.initializedApp.auth().onAuthStateChanged((user) =>{
      if (user) {
        this.setState({
          authed: true,
          user: user,
        });
      } 
    })
  }


  render() {
    return(
    !this.state.authed
    ?
      <div className="container main-div d-flex align-items-center justify-content-center">
          <Login />
      </div>
    :
      <Questionare />
    )}
}

export default App;