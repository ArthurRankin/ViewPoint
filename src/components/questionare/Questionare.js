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
                <div className="d-flex flex-column justify-content-center ">
                    <div className="btn-group btn-group-toggle m-3 justify-content-between" data-toggle="buttons">
                        <label className="choice btn btn-primary pr-5 pl-5">
                            <input 
                                type="radio" 
                                value="true" 
                                onClick={this.handleChange}  
                                name="red" 
                                id="option1" 
                                autoComplete="off"
                                checked="false" /> Red
                        </label>
                        <p className="ml-3 mr-3">or</p>
                        <label className="choice btn btn-primary pr-5 pl-5">
                            <input 
                                type="radio" 
                                value="false" 
                                onClick={this.handleChange} 
                                name="red" 
                                id="option2" 
                                autoComplete="off"
                                checked="false" /> Blue
                        </label>
                    </div>
                    <div className="btn-group btn-group-toggle m-3 justify-content-between" data-toggle="buttons">
                        <label className="choice btn btn-primary pr-5 pl-5">
                            <input 
                                type="radio" 
                                value="true" 
                                onClick={this.handleChange} 
                                name="mac" 
                                id="option1" 
                                autoComplete="off" /> Mac
                        </label>
                        <p className="ml-3 mr-3">or</p>
                        <label className="choice btn btn-primary pr-5 pl-5">
                            <input 
                                type="radio" 
                                value="false" 
                                onClick={this.handleChange} 
                                name="mac" 
                                id="option2" 
                                autoComplete="off" /> PC
                        </label>
                    </div>
                    <div className="btn-group btn-group-toggle m-3 justify-content-between" data-toggle="buttons">
                        <label className="choice btn btn-primary pr-5 pl-5">
                            <input 
                                type="radio" 
                                value="true" 
                                onClick={this.handleChange} 
                                name="starwars" 
                                id="option1" 
                                autoComplete="off" /> Starwars
                        </label>
                        <p className="ml-3 mr-3">or</p>
                        <label className="choice btn btn-primary pr-5 pl-5">
                            <input 
                                type="radio" 
                                value="false" 
                                onClick={this.handleChange} 
                                name="starwars" 
                                id="option2" 
                                autoComplete="off" /> Star Trek
                        </label>
                    </div>
                    <div className="btn-group btn-group-toggle m-3 justify-content-between" data-toggle="buttons">
                        <label className="choice btn btn-primary pr-5 pl-5">
                            <input 
                                type="radio" 
                                value="true" 
                                onClick={this.handleChange} 
                                name="Iphone" 
                                id="option1" 
                                autoComplete="off" /> Iphone
                        </label>
                        <p className="ml-3 mr-3">or</p>
                        <label className="choice btn btn-primary pr-5 pl-5">
                            <input 
                                type="radio" 
                                value="false" 
                                onClick={this.handleChange} 
                                name="Iphone" 
                                id="option2" 
                                autoComplete="off" /> Android
                        </label>
                    </div>
                    <div className="btn-group btn-group-toggle m-3 justify-content-between" data-toggle="buttons">
                        <label className="choice btn btn-primary pr-5 pl-5">
                            <input 
                                type="radio" 
                                value="true" 
                                onClick={this.handleChange} 
                                name="Headphones" 
                                id="option1" 
                                autoComplete="off" /> Headphones
                        </label>
                        <p className="ml-3 mr-3">or</p>
                        <label className="choice btn btn-primary pr-5 pl-5">
                            <input 
                                type="radio" 
                                value="false" 
                                onClick={this.handleChange} 
                                name="Headphones" 
                                id="option2" 
                                autoComplete="off" /> Earbuds
                        </label>
                    </div>
                    <div className="btn-group btn-group-toggle m-3 justify-content-between" data-toggle="buttons">
                        <label className="choice btn btn-primary pr-5 pl-5">
                            <input 
                                type="radio" 
                                value="true" 
                                onClick={this.handleChange} 
                                name="Google" 
                                id="option1" 
                                autoComplete="off" /> Google
                        </label>
                        <p className="ml-3 mr-3">or</p>
                        <label className="choice btn btn-primary pr-5 pl-5">
                            <input 
                                type="radio" 
                                value="false" 
                                onClick={this.handleChange} 
                                name="Google" 
                                id="option2" 
                                autoComplete="off" /> Internet Explorer
                        </label>
                    </div>
                    <div className="btn-group btn-group-toggle m-3 justify-content-between" data-toggle="buttons">
                        <label className="choice btn btn-primary pr-5 pl-5">
                            <input 
                                type="radio" 
                                value="true" 
                                onClick={this.handleChange} 
                                name="Wristwatch" 
                                id="option1" 
                                autoComplete="off" /> Wristwatch
                        </label>
                        <p className="ml-3 mr-3">or</p>
                        <label className="choice btn btn-primary pr-5 pl-5">
                            <input 
                                type="radio" 
                                value="false" 
                                onClick={this.handleChange} 
                                name="Wristwatch" 
                                id="option2" 
                                autoComplete="off" /> No Wristwatch
                        </label>
                    </div>
                    <div className="btn-group btn-group-toggle m-3 justify-content-between" data-toggle="buttons">
                        <label className="choice btn btn-primary pr-5 pl-5">
                            <input 
                                type="radio" 
                                value="true" 
                                onClick={this.handleChange} 
                                name="Big" 
                                id="option1" 
                                autoComplete="off" /> Big
                        </label>
                        <p className="ml-3 mr-3">or</p>
                        <label className="choice btn btn-primary pr-5 pl-5">
                            <input 
                                type="radio" 
                                value="false" 
                                onClick={this.handleChange} 
                                name="Big" 
                                id="option2" 
                                autoComplete="off" /> Small
                        </label>
                    </div>
                    <div className="btn-group btn-group-toggle m-3 justify-content-between" data-toggle="buttons">
                        <label className="choice btn btn-primary pr-5 pl-5">
                            <input 
                                type="radio" 
                                value="true" 
                                onClick={this.handleChange} 
                                name="Coffee" 
                                id="option1" 
                                autoComplete="off" /> Coffee
                        </label>
                        <p className="ml-3 mr-3">or</p>
                        <label className="choice btn btn-primary pr-5 pl-5">
                            <input 
                                type="radio" 
                                value="false" 
                                onClick={this.handleChange} 
                                name="Coffee" 
                                id="option2" 
                                autoComplete="off" /> Tea
                        </label>
                    </div>
                    <div className="d-flex justify-content-center">
                        <input type="submit" className="btn btn-success align-self-center" value="Submit" />
                    </div>
                </div>
            </form>
        )
    }
}

export default Questionare;