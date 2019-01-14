import React, { Component } from 'react';
import {Row,Col,message,Input} from 'antd';
import classnames from 'classnames';
import { withRouter } from 'react-router-dom';
class SignupForm extends Component{
constructor(){
    super()
    this.state={
        username: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        errors: {},
        isLoading: false
    }
}
onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    
}
onSubmit = (e) => {
    e.preventDefault();
    this.setState({ errors: {}, isLoading: true });
    this.props.userSignupRequest(this.state).then(
      () => {
        message.success('success')
          this.props.history.push('/');
      },
      ({ response }) => { this.setState({ errors: response.data, isLoading: false }) }
    );
}

    render(){
      
        return(
           <Row>
               <Col>

               </Col>
           </Row>
        )
    }
}




export default withRouter(SignupForm);