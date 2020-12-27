import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import * as profileAction from '../Action/profileAction'
import InputBox from "./Common/inputbox"
import Label from "./Common/label"
import Button from "./Common/button"
import "./profile.scss"
import userimage from "../Image/userimage.png"
//import userimage from "../Image/user.jpg"
import ProfileTab from "./profileTab"

import { Container, Col, Row, Tabs, Tab } from 'react-bootstrap';

import React, { useState,useEffect } from 'react';

function Profile(props) {
    
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
  useEffect(() => {
    props.getUserDetails({userId:"5fe6338648dbce25f84702b9"})
  }, []);

    return (
        <>
          <div className="bgDesign">
              <div className="circle" />
              <div className="circle2" />
              <div className="borderCircle" />
              <div className="triangleBorder" />
              {/* <div className="triangleBorder2" /> */}
          </div>
      <div className="profileBackground">


      <Container>
        <Row className={"profileFullpage"}>
            <Col xs={12} sm={3} md={3} lg={3} className={" adjustRow"}>
                <div className={"ShadowBox profileBox"}>
                    <div className="Imagecon">
                        <img src={userimage} />
                    </div>
                    <div className="p20 textAlignCenter">
                        <Label text="Suriya kumar" className={"pname "} />
                        <Label text="@ssuriya__" className={"pusername mb5px"} />
                        <Label text="Chennai" className={"plocation mb20px"} />
                        {/* <Label text="ssuriya15@gmail.com" className={"pemail mb20px"} /> */}
                        {/* <Label text="About" className={"caption "} />
                        <Label text={dummyAbout} className={"pabout mb20px"} /> */}
                    </div>
                    
                </div>
            </Col>
            <Col xs={12} sm={3} md={3} lg={1} className={"  "}>
            </Col>
            <Col xs={12} sm={3} md={3} lg={8} className={"  profilediv2"}>
                <ProfileTab />
            </Col>
        </Row>
         
      </Container>
      </div>
      </>
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
        Object.assign({}, profileAction),
        dispatch
    )
 }

export default connect(
  mapStateToProps ,
  mapDispatchToProps 
)(Profile)

