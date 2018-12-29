import React, { Component } from 'react'
import LoginForm from './Loginform';
import {Row,Col} from 'antd';
import { connect } from 'react-redux';
import {login,setCurrentUser,setCurrentPermission} from '../../actions/LoginActions';

class LoginPage extends Component{
    render(){
        const {login,setCurrentUser,setCurrentPermission} = this.props;
        return(
            <Row>
                <Col xs={6} sm={8}></Col>
                <Col xs={12} sm={8}>
                    <LoginForm login={login} setCurrentUser={setCurrentUser} setCurrentPermission={setCurrentPermission}/>
                </Col>
                <Col xs={6} sm={8} ></Col>
            </Row>
        )
    }
}
export default connect(null, {login,setCurrentUser,setCurrentPermission})(LoginPage);
