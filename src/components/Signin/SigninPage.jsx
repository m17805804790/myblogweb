import React, { Component } from 'react'
import SigninForm from './Signinform';
import { connect } from 'react-redux';
import {userSigninRequest} from '../../actions/SigninActions';

class SigninPage extends Component{
    render(){
        const {userSigninRequest} = this.props;
        return(
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6 col-xs-8">
                    <SigninForm userSigninRequest={userSigninRequest}/>
                </div>
                <div className="col-md-3 col-xs-4">1</div>
            </div>
        )
    }
}
export default connect(null, {userSigninRequest})(SigninPage);
