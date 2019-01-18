import React, { Component } from 'react';
import {
    Row, Col, Form, Icon, Input, Button, message,
} from 'antd';

class SignupPage extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            username: '',
            password: '',
            passwordcomfirm: '',

        }
    }

    componentDidMount = () => {
        if (window.location.pathname = "/") {
            message.warning("请先验证邮箱", 5)
        } else if (!this.getCookie("ylwblhavscomfirmemail")) {
            message.warning("请先验证邮箱", 5)
        } else {
            let email = window.location.pathname.split("&")[1].split("=")[1];
            this.setState({
                email
            })
        }
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    getCookie(name) {
        let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        arr = document.cookie.match(reg)
        if (arr) {
            return unescape(arr[2]);
        } else {
            return null;
        }
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
                        </Form.Item>
                        <Form.Item>
                            <Input
                                name="passwordcomfirm"
                                // value={ this.state.password }
                                onChange={this.onChange}
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="passwordcomfirm"
                                placeholder="请确认密码"
                            />
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
                                // disabled={this.state.btnability}
                                htmlType="submit"
                                style={{ width: '100%' }}>
                                {/* {this.state.btnname} */}
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