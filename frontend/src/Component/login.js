import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import * as loginAction from '../Action/loginAction'
import InputBox from "./Common/inputbox"
import Label from "./Common/label"
import Button from "./Common/button"
import "./login.scss"

import { Container, Col, Row } from 'react-bootstrap';

import React, { useState } from 'react';

function App(props) {

  const [state,setState] = useState({
    uname:"",
    pass:""
  })

  const onChange=(e)=>{
    setState({
        ...state,
        [e.target.id]:e.target.value
      })
  }

    return (
      <div className="Loginfullpage">
      <Container>
        <Row>
          <Col className={"textAlignCenter"}>
          <Col lg={5} className={"ShadowBox p10 mt80 login"}>
              <div>
                  <Label text="Login" className={"loginCaption mb20px"} />

                  <Label text="User Name" />
                  <InputBox className={"mb15px"} id="uname" onChange={onChange} />

                  <Label text="Password" />
                  <InputBox type={"Password"} className={"mb30px"} id="pass" onChange={onChange} />

                <Button 
                    className={"loginBtn mb15px"}
                    text={"Login"}
                    onClick={()=>props.login({userName:state.uname,password:state.pass})} 
                />

                <div className={"textAlignCenter"}>
                  <a className={"mb30px"} href={"/signUp"}>
                    Don't have an account?
                  </a>
                </div>
                  
              </div>
          </Col>
          </Col>
        </Row>
         
      </Container>
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

