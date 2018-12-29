import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignupForm from './SignupForm';
import {Row,Col} from 'antd';
import { userSignupRequest } from '../../actions/SignupActions';
class SignupPage extends Component{
    render(){
        const {userSignupRequest} = this.props;
        return(
            <Row>
                <Col md={6} ></Col>
                <Col md={12}>
                    <SignupForm 
                        userSignupRequest={ userSignupRequest } 
                    />
                </Col>
                <Col md={6}></Col>
            </Row>
        )
    }
}
export default connect(null, {userSignupRequest})(SignupPage);