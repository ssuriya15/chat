import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import * as loginAction from '../Action/loginAction'

import React, { useState } from 'react';

function App(props) {

  const [uname,setUname] = useState()
  const [pass,setPass] = useState()
  
    return (
      <div className="App">
          <div>
            <span>
              User Name
            </span>
            <br/>
            <input onChange={(e)=>setUname(e.target.value)} />
            <br/>
            <span>
              Password
            </span>
            <br/>
            <input onChange={(e)=>setPass(e.target.value)} />
            <br/>
            <button onClick={()=>props.login({userName:uname,password:pass})}>
              Login
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
)(App)

