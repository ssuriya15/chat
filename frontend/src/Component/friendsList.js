import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import * as loginAction from '../Action/loginAction'
import InputBox from "./Common/inputbox"
import Label from "./Common/label"
import Button from "./Common/button"
import userimage from "../Image/userimage.png"
import "./profile.scss"

import { Container, Col, Row, Tabs, Tab } from 'react-bootstrap';

import React, { useState } from 'react';

function Friends(props) {
    
    
  const [state,setState] = useState({
    tab:0
  })

  const onChange=(e)=>{
    setState({
        ...state,
        [e.target.id]:e.target.value
      })
  }

  const dummyFList = [
      {
          name:"Dinesh kumar",
          location:"Chennai",
          userimage:userimage,
          userName:"dkumar12"
      },
      {
          name:"Rengarajan",
          location:"Trichy",
          userimage:userimage,
          userName:"renga420"
      },
      {
          name:"Karthick",
          location:"Trichy",
          userimage:userimage,
          userName:"karthi423"
      },
      {
          name:"Hema kumar",
          location:"Trichy",
          userimage:userimage,
          userName:"hema143"
      },
      {
          name:"Pasubadhi",
          location:"Trichy",
          userimage:userimage,
          userName:"pasu007"
      },
      {
          name:"Sundar",
          location:"Chennai",
          userimage:userimage,
          userName:"sundar786"
      },
      {
          name:"Naren",
          location:"Chennai",
          userimage:userimage,
          userName:"naren555"
      }
  ]

    return (
      <div className="">
            {dummyFList.map((data)=>{
                return <Row className={"flcon"}>
                            <Col  xs={12} sm={3} md={3} lg={2} className={"fimg"}>
                                <img src={data.userimage} />
                            </Col>
                            <Col xs={12} sm={3} md={3} lg={10}>
                                <Label text={data.name} className={"fname"} />
                                <Label text={"@"+data.userName} className={"funame mb5px"} />
                                <Label text={data.location} className={"flocation"} />
                            </Col>
                        </Row>
            })}
      </div>
    );
  }
  

const mapStateToProps = (state /*, ownProps*/) => {
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
)(Friends)

