import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './main.css';
import Login from './components/loginPage/Login';
import Questionare from './components/questionare/Questionare';
import { rebase }  from './components/DBInteractions/base';
import { GetFromFB } from './components/DBInteractions/FB-Functions';
import ChatRoom from './components/chatRoom/ChatRoom';


class App extends Component {

    state = {
      authed: false,
      user: null,
      uid: null,
      data: ""
    }


  componentDidMount = () => {
    console.log('this.state first', this.state.data.length);
    this.authListener = rebase.initializedApp.auth().onAuthStateChanged((user) =>{
      if (user) {
        this.setState({
          authed: true,
          user: user,
          uid:user.uid
        });
        GetFromFB(`users/${this.state.uid}`)
        .then((data) => {
          this.setState({
            data:data
          })
          console.log('this.state.',this.state.data[0].mac);
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
    
    !this.state.data.length > 0  

    ?
        <div className="container main-div d-flex align-items-center justify-content-center">
            <Questionare user={this.state.user} />
        </div>

    :

        <div>
            <ChatRoom />
        </div>
    )}
}

export default App;
