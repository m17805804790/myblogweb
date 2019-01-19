import React, { Component } from 'react';
import {
    Row, Col, Form, Icon, Input, Button, message, Spin
} from 'antd';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

class SignupPage extends Component {
    constructor() {
        super();
        this.state = {
            btnname: '注册',
            email: '',
            username: '',
            password: '',
            passwordcomfirm: '',
            usernameIsright:false,
            passwordIsright:false,
            passwordcomfirmIsright:false,
            checksecondpassword:false,
            checkfirstpassword:false,
            checkusername:false,
           



        }
    }

    componentDidMount = () => {

        let email = this.props.match.params.info.split("=")[1];
        this.setState({
            email
        })
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        switch(e.target.name){
            case "username":this.setState({
                checkusername:true
            });
            break;
            case "password":this.setState({
                checkfirstpassword:true
            });
            break;
            case "passwordcomfirm":this.setState({
                checksecondpassword:true
            })
        }
        if(this.state.username.length>=5){
            
            this.setState({
                usernameIsright:true
            })
        }else
        if(this.state.password.length>=5){
            console.log(1)
            this.setState({
                passwordIsright:true
            })
        }
        
        
    }
    // passwordcomfirmChange = (e) =>{
    //     this.setState({
    //         [e.target.name]: e.target.value,
    //         checksecondpassword:true
    //     })
    // }
    // usernameChange =(e) =>{
    //     this.setState({
    //         [e.target.name]: e.target.value,
    //         checkusername:true
    //     })
    // }
    // passwordChange = (e) =>{
    //     this.setState({
    //         [e.target.name]: e.target.value,
    //         checkfirstpassword:true
    //     })
    // }
    getCookie(name) {
        let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        arr = document.cookie.match(reg)
        if (arr) {
            return unescape(arr[2]);
        } else {
            return null;
        }
    }
    countDown(sec = 3, tickCallback, cb) {
        cb();
        return new Promise((resolve, reject) => {
            let count = sec;
            tickCallback(count);
            let timer = setInterval(() => {
                tickCallback(--count);
                if (count <= 0) {
                    clearInterval(timer);
                    resolve();
                }
            }, 1e3);
            return
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.setState({
            btnname: <Spin spinning={this.state.loading} delay={500} style={{ marginTop: "5px" }}></Spin>,
        })
        axios.post('/api/signups/signup', this.state).then(
            res => {
                const { token, status ,url} = res.data;
                if (status !== "success") {
                    message.error("好像出错了", 5);
                } else {
                    localStorage.setItem('jwtToken', token);
                    this.props.history.push(url);
                    window.location.reload();
                }
            }
        )
    }
    render() {

        return (
            <Row>
                <Col md={6} ></Col>
                <Col md={12}>
                    <Form onSubmit={this.onSubmit} className="login-form">
                        <h3><Icon type='man' /><Icon type='man' /><Icon type='man' />注册开放</h3>
                        <Form.Item>
                            <Input
                                name="username"
                                // value={ this.state.username }
                                onChange={this.onChange}
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="请输入用户名"
                            />
                            {this.state.checkusername?!this.state.usernameIsright?<p style={{marginTop:"-12px",marginBottom: "-14px",height:"30px",paddingTop:"6px",paddingLeft:"10px",color:"#f00"}}>字符随意但是长度起码6个字符哦</p>:'':''}
                        </Form.Item>
                        <Form.Item>
                            <Input
                                name="password"
                                // value={ this.state.password }
                                onChange={this.onChange}
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="请输入密码"
                            />
                            {this.state.checkfirstpassword?!this.state.passwordIsright?<p style={{marginTop:"-12px",marginBottom: "-14px",height:"30px",paddingTop:"6px",paddingLeft:"10px",color:"#f00"}}>密码是由数字,英文组成的至少6位的字符串</p>:'':''}
                        </Form.Item>
                        <Form.Item>
                            <Input
                                name="passwordcomfirm"
                                // value={ this.state.passwordcomfirm }
                                onChange={this.onChange}
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="请确认密码"
                            />
                            {this.state.checksecondpassword?this.state.passwordcomfirm!==this.state.password?<p style={{marginTop:"-12px",marginBottom: "-14px",height:"30px",paddingTop:"6px",paddingLeft:"10px",color:"#f00"}}>两次密码输入必须一致哦</p>:'':''}
                        </Form.Item>
                        <Form.Item>
                            <Input
                                name="email"
                                value={this.state.email}
                                disabled
                                onChange={this.onChange}
                                prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="email"

                            />
                        </Form.Item>

                        <Form.Item>
                            <Button
                                type="primary"
                                disabled={this.state.btnname === "注册" ? false : true}
                                htmlType="submit"
                                style={{ width: '100%' }}>
                                {this.state.btnname}
                            </Button>
                        </Form.Item>

                    </Form>
                </Col>
                <Col md={6}></Col>
            </Row>
        )
    }
}
export default SignupPage;