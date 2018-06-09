import React, { Component } from 'react';
import LoginTemp from './LoginTemp';
import { loginWithGoogle } from '../DBInteractions/FB-Functions';

class Login extends Component {
    
    render () {
        return(
            <div>
                <LoginTemp function={loginWithGoogle} />
            </div>
        )
    }
}

export default Login;