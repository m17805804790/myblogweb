import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignupForm from './SignupForm';
import { userSignupRequest } from '../../actions/SignupActions';
import { addFlashMessage } from '../../actions/FlashMessages'
class SignupPage extends Component{
    render(){
        const {userSignupRequest,addFlashMessage} = this.props;
        return(
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <SignupForm 
                        userSignupRequest={ userSignupRequest } 
                        addFlashMessage={ addFlashMessage }
                    />
                </div>
                <div className="col-md-3"></div>
            </div>
        )
    }
}
export default connect(null, { userSignupRequest,addFlashMessage })(SignupPage);