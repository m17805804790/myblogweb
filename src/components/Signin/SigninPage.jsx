import React, { Component } from 'react'
import SigninForm from './Signinform';

export default class SigninPage extends Component{
    render(){
        return(
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <SigninForm/>
                </div>
                <div className="col-md-3"></div>
            </div>
        )
    }
}
