import React from 'react';

let QuestTemp = (props) => {
    return(
        <div className="d-flex flex-column">
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
                <label className="btn btn-secondary">
                    <input type="radio" onClick={props.function} name="options" id="option1" autoComplete="off"  /> Red
                </label>
                <label className="btn btn-secondary">
                    <input type="radio" name="options" id="option2" autoComplete="off" /> Blue
                </label>
            </div>
        </div>
    )
}

export default QuestTemp;