import React from 'react';


let LoginTemp = (props) => {
    return(
        <div>
            <div className="card text-center border border-success">
                <div className="card-header pt-pr-pl-5 pb-0">
                    <h1>ViewPoint</h1>
                </div>
                <div className="card-body p-5 intro">
                    <p>Welcome to ViewPoint!<br /> The game that helps you build empathy while simultaneously developing your skills in persuasion. Simply login with <button onClick={props.function} className=" p-0 btn btn-warning">Google</button> and answer the questions on the next page. 
                    </p>
                    <button onClick={props.function} className=" pr-5 pl-5 pt-3 pb-3 btn btn-warning">Google</button>
                </div>

            </div>
        </div>
    )
}

export default LoginTemp;