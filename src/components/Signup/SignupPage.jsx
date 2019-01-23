import React, { Component } from 'react';
import {
    Row, Col, Form, Icon, Input, Button, message, Spin, Tooltip
} from 'antd';
import axios from 'axios';
import { setCurrentUser, setCurrentPermission } from '../../actions/LoginActions';
import setAuthorizationToken from '../../utils/setAuthorizationToken';
import { connect } from "react-redux";
import jwtDecode from 'jwt-decode';
import("./SignupPage.less");
class SignupPage extends Component {
    constructor() {
        super();
        this.state = {
            btnname: '注册',
            email: '',
            username: '',
            password: '',
            passwordcomfirm: '',
            usernameIsright: false,
            passwordIsright: false,
            passwordcomfirmIsright: false,
            checksecondpassword: false,
            checkfirstpassword: false,
            checkusername: false,
            title: "点我查看用户名是否被占用",
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
        switch (e.target.name) {
            case "username": this.setState({
                checkusername: true
            });
                break;
            case "password": this.setState({
                checkfirstpassword: true
            });
                break;
            case "passwordcomfirm": this.setState({
                checksecondpassword: true
            })
        }



    }
    setCookie(name, value, time) {
        let strsec = this.getsec(time);
        let exp = new Date();
        exp.setTime(exp.getTime() + strsec * 1);
        document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
    }
    getsec(str) {
        let str1 = str.substring(1, str.length) * 1;
        let str2 = str.substring(0, 1);
        if (str2 === "s") {
            return str1 * 1000;
        }
        else if (str2 === "h") {
            return str1 * 60 * 60 * 1000;
        }
        else if (str2 === "d") {
            return str1 * 24 * 60 * 60 * 1000;
        }
    }
    //这是有设定过期时间的使用示例：
    //s20是代表20秒
    //h是指小时，如12小时则是：h12
    //d是天数，30天则：d30
    getCookie(name) {
        let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        arr = document.cookie.match(reg)
        if (arr) {
            return unescape(arr[2]);
        } else {
            return null;
        }
    }
    countDown(sec = 3, tickCallback) {
        return new Promise((resolve, reject) => {
            let count = sec;
            tickCallback(count);
            let timer = setInterval(() => {
                tickCallback(--count);
                count--;
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
        if (this.getCookie("ylwblhavecheckusername")) {
            axios.post('/api/signups/signup', this.state).then(
                res => {
                    const { token, status } = res.data;
                    if (status !== "success") {
                        if (status === "alreadyexist") {
                            message.error("好像出错了", 5);
                        }
                    } else {
                        localStorage.setItem('jwtToken', token);
                        setAuthorizationToken(token);
                        setCurrentUser(jwtDecode(token).username);
                        setCurrentPermission(jwtDecode(token).permission);
                        this.props.history.push("/");
                    }
                }
            )
        } else {
            axios.post("/api/signups/comfirmusername", { username: this.state.username }).then(
                res => {
                    switch (res.data) {
                        case "success": axios.post('/api/signups/signup', this.state).then(
                            res => {
                                const { token, status } = res.data;
                                if (status !== "success") {
                                    if (status === "alreadyexist") {
                                        message.error("好像出错了", 5);
                                    }
                                } else {
                                    localStorage.setItem('jwtToken', token);
                                    setAuthorizationToken(token);
                                    setCurrentUser(jwtDecode(token).username);
                                    setCurrentPermission(jwtDecode(token).permission);
                                    this.props.history.push("/");
                                }
                            }
                        )
                            break;
                        default: message.error("请先点击用户名图标验证用户名是否被占用", 5);
                            break;
                    }
                }
            )
        }
    }

    checkusername = () => {
        axios.post("/api/signups/comfirmusername", { username: this.state.username }).then(
            res => {
                if (res.data === "alreadyexist") {
                    this.setState({
                        title: "已经被占用啦!!"
                    })
                } else if (res.data === "success") {
                    this.setState({
                        title: "未被占用!!"
                    })
                    this.setCookie("ylwblhavecheckusername", 1, "d30")
                } else {
                    this.setState({
                        title: "服务器炸啦!!!"
                    })
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
                        <h3 style={{ textAlign: "center" }}><Icon type='man' /><Icon type='man' /><Icon type='man' />注册开放</h3>
                        <Form.Item>
                            <Input
                                name="username"
                                // value={ this.state.username }
                                onChange={this.onChange}
                                prefix={<Tooltip title={this.state.title}><Icon className="usericon" type="user" style={{ color: 'rgba(0,0,0,.25)' }} onClick={this.checkusername} /></Tooltip>}
                                placeholder="请输入用户名"
                            />
                            {this.state.checkusername ? this.state.username.length < 6 ? <p style={{ marginTop: "-12px", marginBottom: "-14px", height: "30px", paddingTop: "6px", paddingLeft: "10px", color: "#f00" }}>字符随意但是长度起码6个字符哦</p> : '' : ''}
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
                            {this.state.checkfirstpassword ? this.state.password.length < 6 ? <p style={{ marginTop: "-12px", marginBottom: "-14px", height: "30px", paddingTop: "6px", paddingLeft: "10px", color: "#f00" }}>密码是由数字,英文组成的至少6位的字符串</p> : '' : ''}
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
                            {this.state.checksecondpassword ? this.state.passwordcomfirm !== this.state.password ? <p style={{ marginTop: "-12px", marginBottom: "-14px", height: "30px", paddingTop: "6px", paddingLeft: "10px", color: "#f00" }}>两次密码输入必须一致哦</p> : '' : ''}
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
export default connect(null, { setCurrentUser, setCurrentPermission })(SignupPage);