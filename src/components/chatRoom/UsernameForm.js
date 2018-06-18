import React, { Component } from 'react'

class UsernameForm extends Component {
 constructor(props) {
   super(props)
   this.state = {
     username: '',
   }
 }

 onSubmit = (e) => {
   e.preventDefault()
   this.props.onSubmit(this.state.username)
 }

 onChange = (e) => {
    this.setState({ username: e.target.value })
  }

  render() {
    return (
      <div>
        <div>
          <h2 className="text-center">NickName</h2>
          <p>Pick a nickname for people to see!! <br /> good examples are:<br /> "DebateMan" <br /> "ArthurTheUnreasonable"<br /> "ListenToMe" etc..</p>
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              placeholder="NickName"
              onChange={this.onChange}
            />
            <input type="submit" className="btn btn-warning align-self-center ml-2" value="Submit" />
          </form>
        </div>
      </div>
    )
  }
}

 export default UsernameForm