import React, { Component } from 'react'



export default class SigninForm extends Component{
    constructor(){
        super()
        this.state={
            username:'',
            password:''
        }
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        
    }
    render(){
        
        return(
            <form onSubmit={this.onSubmit}>
               <h1>此功能未完善</h1>
               <div className="form-group">
                <label className="control-label">Username</label>
                <input
                    value={ this.state.username }
                    onChange={ this.onChange }
                    type="text"
                    name="username"
                    className='form-control'
                />
                
                </div>

                
                
                <div className="form-group">
                <label className="control-label">Password</label>

                <input
                    value={ this.state.password }
                    onChange={ this.onChange }
                    type="password"
                    name="password"
                    className='form-control'
                />
                
                </div>

                

                

                <div className="form-group">
                <button disabled={ this.state.isLoading }  className="btn btn-primary btn-lg">
                    点击登录
                </button>
                        </div>
                </form>
        )
    }
}