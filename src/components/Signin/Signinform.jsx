import React, { Component } from 'react';
import {Notification} from 'element-react';
import {withRouter} from 'react-router-dom';

class SigninForm extends Component{
    constructor(){
        super()
        this.state={
            username:'',
            password:'',
            errors:{},
            isisLoading:false
        }
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.setState({ errors: {}, isLoading: true });
        this.props.userSigninRequest(this.state).then(
            (response)=>{
                console.log(response);
                if(response.data.status=='admin'){
                    this.openadmin();
                    this.props.history.push('/');
                }else if(response.data.status=='guest'){
                    this.openguest();
                    this.props.history.push('/');
                }else{
                    this.openerror();
                    this.props.history.push('/signin');
                }
                
            },
            
            );
        
        
    }
    openadmin(){
        Notification({
            title: '哦秀金sama',
            message: '哦卡唉里',
            
          });
    }
    openguest(){
        Notification({
            title: '傻逼',
            message: '你来啦',
            
          });
    }
    openerror(){
        Notification({
            title: '傻逼',
            message: '账号密码错了',
            
          });
    }
    render(){
        
        return(
            <form onSubmit={this.onSubmit}>
               <h1>登录功能开放</h1>
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

                

                {/* disabled={ this.state.isLoading } */}

                <div className="form-group">
                <button   className="btn btn-primary btn-lg">
                    点击登录
                </button>
                        </div>
                </form>
        )
    }
}
export default withRouter(SigninForm);