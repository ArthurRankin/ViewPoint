import React from 'react';


let LoginTemp = (props) => {
    return(
        <div>
            <div className="card text-center ">
                <div className="card-header pt-pr-pl-5 pb-0">
                    <h1>ViewPoint</h1>
                </div>
                <div className="card-body p-5">
                    <p>Login With Google</p>
                    <button onClick={props.function} className="btn btn-primary ">Google</button>
                </div>
            </div>
        </div>
    )
}

export default LoginTemp;