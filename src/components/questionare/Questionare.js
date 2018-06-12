import QuestTemp from './QuestTemp';
import React, {Component} from 'react';
import { SaveObjToFB } from '../DBInteractions/FB-Functions';

class Questionare extends Component {
    state = {
    }


    handleChange = (event) => { 
       const target = event.target;
       const value = target.value;
       const name = target.name;
       this.setState({
           [name]: value
       });
    }   
    
    handleSubmit = () => {
        let stateObj = this.state
        SaveObjToFB(`users/${this.props.user.uid}`, stateObj)
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="d-flex flex-column">
                    <div className="btn-group btn-group-toggle" data-toggle="buttons">
                        <label className="btn btn-secondary">
                            <input type="radio" value="true" onClick={this.handleChange}  name="red" id="option1" autoComplete="off" /> Red
                        </label>
                        <label className="btn btn-secondary">
                            <input type="radio" value="false" onClick={this.handleChange} name="red" id="option2" autoComplete="off" /> Blue
                        </label>
                    </div>
                    <div className="btn-group btn-group-toggle" data-toggle="buttons">
                        <label className="btn btn-secondary">
                            <input type="radio" value="true" onClick={this.handleChange} name="mac" id="option1" autoComplete="off" /> Mac
                        </label>
                        <label className="btn btn-secondary">
                            <input type="radio" value="false" onClick={this.handleChange} name="mac" id="option2" autoComplete="off" /> PC
                        </label>
                    </div>
                    <div>
                        <input type="submit" value="Submit" />
                    </div>
                </div>
            </form>
        )
    }
}

export default Questionare;