import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import * as profileAction from '../Action/profileAction'
import InputBox from "./Common/inputbox"
import Label from "./Common/label"
import Button from "./Common/button"
import FriendsList from "./friendsList"
import userimage from "../Image/userimage.png"
import "./profile.scss"

import { Container, Col, Row, Tabs, Tab } from 'react-bootstrap';

import React, { useState, useEffect } from 'react';

function Profile(props) {    
  const [state,setState] = useState({
    tab:0
  })

  const onChange=(e)=>{
    setState({
        ...state,
        [e.target.id]:e.target.value
      })
  }
  const tabChange=(e)=>{
      console.log(e)
    setState({
        ...state,
        tab:e
      })
  }

  useEffect(() => {
    console.log(props)
    props.getUserList({userId:"5fe6338648dbce25f84702b9"})
  }, []);

    return (
      <div className="">
            <Tabs onSelect={tabChange} >
                <Tab eventKey={0} title="All">
                    <FriendsList />
                </Tab>
                <Tab eventKey={1} title="Friends">
                </Tab>
            </Tabs>
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
        Object.assign({}, profileAction),
        dispatch
    )
 }

export default connect(
  mapStateToProps ,
  mapDispatchToProps 
)(Profile)

