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

  const [uname,setUname] = useState()
  const [pass,setPass] = useState()
  
    return (
      <Container>
        <Row>
          <Col className={"textAlignCenter"}>
          <Col lg={5} className={"ShadowBox p10 mt80 login"}>
              <div>
                  <Label text="User Name" />
                  <InputBox className={"mb15px"} onChange={setUname} />

                  <Label text="Password" />
                  <InputBox className={"mb20px"} onChange={setPass} />

                <Button 
                    className={"loginBtn"}
                    text={"Login"}
                    onClick={()=>props.login({userName:uname,password:pass})} 
                />
                  
              </div>
          </Col>
          </Col>
        </Row>
         
      </Container>
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

