import React, { Component } from 'react'
import Chatkit from '@pusher/chatkit'
import MessageList from './MessageList'
import SendMessageForm from './SendMessageForm'
import TypingIndicator from './TypingIndicator'



class ChatScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentUser: {},
            currentRoom: {},
            messages: [],
            usersWhoAreTyping: [],
        }
    }



    sendTypingEvent = () => {
        this.state.currentUser
            .isTypingIn({ roomId: this.state.currentRoom.id })
            .catch(error => console.error('error', error))
    }



    sendMessage = (text) => {
        this.state.currentUser.sendMessage({
            text,
            roomId: this.state.currentRoom.id,
        })
    }
    

    componentDidMount = () => {
        const chatManager = new Chatkit.ChatManager({
        instanceLocator: 'v1:us1:db694a0a-4ca0-4b5e-a46a-d2bb91a5e6f3',
        userId: this.props.currentUsername,
        tokenProvider: new Chatkit.TokenProvider({
            url: 'http://localhost:3001/authenticate',
        }),
    })

    chatManager
        .connect()
        .then(currentUser => {
            this.setState({ currentUser }) 
            return currentUser.subscribeToRoom({
                roomId: 9748284,
                messageLimit: 5,
                hooks: {
                    onNewMessage: message => {
                        this.setState({
                        messages: [...this.state.messages, message],
                        })
                    },
                    onUserStartedTyping: user => {
                        this.setState({
                            usersWhoAreTyping: [...this.state.usersWhoAreTyping, user.name],
                        })
                    },
                    onUserStoppedTyping: user => {
                        this.setState({
                            usersWhoAreTyping: this.state.usersWhoAreTyping.filter(
                                username => username !== user.name
                            ),
                        })
                    },
                },
            })
        })
        .then(currentRoom => {
            this.setState({ currentRoom })
        })
        .catch(error => console.error('error', error))
  }

    render() {
        const styles = {
            container: {
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
            },
            chatContainer: {
                display: 'flex',
                flex: 1,
            },
            directions: {
                width: '300px',
                flex: 'none',
                padding: 20,
                backgroundColor: 'black',
                color: 'white',
            },
            chatListContainer: {
                padding: 20,
                width: '85%',
                display: 'flex',
                flexDirection: 'column',
            },
        }
            
        return (
            <div style={styles.container}>
                <div style={styles.chatContainer}>
                    <aside style={styles.directions}>
                        <h2>Directions</h2>
                        <ol>
                            <li>You have 5 messages to convince the other of your viewpoint, so don't waste your message on anger</li>
                            <li>Stand firm on your beliefs</li>
                            <li>Read and feel what the other person is saying</li>
                            <li>BE NICE, unless you can't</li>
                        </ol>
                    </aside>
                    <section style={styles.chatListContainer}>
                        <h2 className="border-bottom">Star Wars Vs. Startrek</h2>
                        <MessageList
                        messages={this.state.messages}
                        style={styles.chatList}
                        />   
                        <TypingIndicator usersWhoAreTyping={this.state.usersWhoAreTyping} />      
                        <SendMessageForm onSubmit={this.sendMessage} 
                        onChange={this.sendTypingEvent}
                        />
                    </section>
                </div>
            </div>
        )
    }
}

export default ChatScreen