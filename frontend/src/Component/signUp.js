import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import * as loginAction from '../Action/loginAction'

import React, { useState } from 'react';

function SignUP(props){

  const [state,setState] = useState({
      name:"",
      userName:"",
      password:"",
      cpassword:"",
      email:""
  })
  const onChange=(e)=>{
      setState({
          ...state,
          [e.target.id]:e.target.value
        })
  }

console.log(state)
    return (
      <div className="App">
          <div>
            <span>
              Name
            </span>
            <br/>
            <input id="name" onChange={(e)=>onChange(e)} />
            <br/>
            <span>
              Email
            </span>
            <br/>
            <input id="email" onChange={(e)=>onChange(e)} />
            <br/>
            <span>
              User Name
            </span>
            <br/>
            <input id="userName" onChange={(e)=>onChange(e)} />
            <br/>
            <span>
              Password
            </span>
            <br/>
            <input id="password" onChange={(e)=>onChange(e)} />
            <br/>
            <span>
              Confirm password
            </span>
            <br/>
            <input id="cpassword" onChange={(e)=>onChange(e)} />
            <br/>
            <button onClick={()=>props.signUp(state)}>
              Sign up
            </button>
          </div>
      </div>
    );
  }
  

const mapStateToProps = (state /*, ownProps*/) => {
    console.log(state)
  return {
    counter: state.counter
  }
}

const mapDispatchToProps =(dispatch)=> { 
    return bindActionCreators(
        Object.assign({}, loginAction),
        dispatch
    )
 }

export default connect(
  mapStateToProps ,
  mapDispatchToProps 
)(SignUP)

