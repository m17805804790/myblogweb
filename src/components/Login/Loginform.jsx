import React, { Component } from 'react';
import {notification,Form,Icon,Input,Button} from 'antd';
import {withRouter} from 'react-router-dom';
import setAuthorizationToken from '../../utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';



class SigninForm extends Component{
    constructor(){
        super()
        this.state={
            username:'',
            password:'',
            btnname:'登录',
            btnability:false     
        }
    }
    protectmyserver(){
        let time = 5;
        this.setState({btnability:true,btnname:`${time}秒后再试`})
        let timer = setInterval(()=>{
            if(time===0){
                clearInterval(timer);
                this.setState({btnability:false,btnname:'登录'})
            }else{
                time--;
                this.setState({btnname:`${time}秒后再试`})
            }
        },1000)
    }
    onChange = (e) => { 
        this.setState({ [e.target.name]: e.target.value });     
    }
    onSubmit = (e) => {
        const {setCurrentUser,setCurrentPermission} = this.props;
        e.preventDefault();
        this.setState({ errors: {}, isLoading: true });
        this.props.login(this.state).then(
            (response)=>{
                if(response.data.status==='success'){
                    const token =response.data.token;
                    localStorage.setItem('jwtToken', token);
                    setAuthorizationToken(token);    
                    setCurrentUser(jwtDecode(token).username);
                    setCurrentPermission(response.data.permission);
                    if(response.data.permission==='admin'){
                        this.openadmin();
                    }else{
                        this.openguest();
                    }
                    this.props.history.push('/');
                }else{
                    this.openerror();
                    this.protectmyserver();
                }
                
            },
        );
    }
    openadmin(){
        notification.open({
            message: '哦秀金sama',
            description: '哦卡唉里',
            
          });
    }
    openguest(){
        notification.open({
            message: '登录成功',
            description: '欢迎',
            
          });
    }
    openerror(){
        notification.open({
            
            description: '账号密码错误',
            
          });
    }
    render(){  
        return(
            <Form onSubmit={this.onSubmit} className="login-form">
               <h3>登录功能开放    <Icon type='man'/><Icon type='man'/><Icon type='man'/>然而注册没开放</h3>
               <Form.Item>     
                <Input
                    name="username"
                    value={ this.state.username }
                    onChange={ this.onChange }
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                    placeholder="Username"
                />  
                </Form.Item>           
                <Form.Item>
                <Input
                    name="password"
                    value={ this.state.password }
                    onChange={ this.onChange }
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                    type="password" 
                    placeholder="Password"
                />
                </Form.Item>
                <Form.Item>
                    <Button 
                        type="primary" 
                        disabled={this.state.btnability}
                        htmlType="submit" 
                        style={{width:'100%'}}>
                        {this.state.btnname}
                    </Button>
                </Form.Item>
                        
                </Form>
        )
    }
}
export default withRouter(SigninForm);