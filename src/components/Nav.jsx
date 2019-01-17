import React, { Component, Fragment } from 'react';
import { Menu, Modal, Input,message } from 'antd';

import { connect } from 'react-redux';
import { logout } from '../actions/LoginActions';
import { Link } from 'react-router-dom';
import axios from 'axios';
require('./Nav.css')

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Nav extends Component {
    constructor() {
        super();
        this.state = {
            modalvisable: false,
            isEmail: true,
            email: '',
        }
    }

    logout(e) {
        e.preventDefault();
        this.props.logout();
    }


    //至68为根据登录情况控制nav显示的     
    comfirm(isAuthenticated, permission) {
        const admin = (
            <Menu
                mode="horizontal"
            >
                <Menu.Item key="mainpage">
                    <Link to="/">永老无别离</Link>
                </Menu.Item>
                <Menu.Item key="articlelist">
                    <Link to="/articlelist">我的日志</Link>
                </Menu.Item>
                <Menu.Item key="writearticle">
                    <Link to="/writearticle">写日志</Link>
                </Menu.Item>
                <Menu.Item key="messagelist">
                    <Link to="/messagelist">留言</Link>
                </Menu.Item>
                <SubMenu title={<span className="submenu-title-wrapper">一点微小的贡献</span>}>
                    <MenuItemGroup>
                        <Menu.Item key="fgoap">
                            <Link to="/fgoap">fgo真好玩</Link>
                        </Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup>
                        <Menu.Item key="yys">
                            <Link to="/yysnav">阴阳师</Link>
                        </Menu.Item>

                    </MenuItemGroup>
                </SubMenu>
                <Menu.Item key="logout">
                    <Link to="javascript：void" onClick={this.logout.bind(this)}>登出</Link>
                </Menu.Item>
            </Menu>
        );
        const guest = (
            <Menu
                mode="horizontal"
            >
                <Menu.Item key="mainpage">
                    <Link to="/">永老无别离</Link>
                </Menu.Item>
                <Menu.Item key="articlelist">
                    <Link to="/articlelist">我的日志</Link>
                </Menu.Item>
                <Menu.Item key="messagelist">
                    <Link to="/messagelist">留言</Link>
                </Menu.Item>
                <SubMenu title={<span className="submenu-title-wrapper">一点微小的贡献</span>}>
                    <MenuItemGroup title="Fgo">
                        <Menu.Item key="fgoap">
                            <Link to="/fgoap">fgo真好玩</Link>
                        </Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup title="阴阳师">
                        <Menu.Item key="yys">
                            <Link to="/yysnav">阴阳师</Link>
                        </Menu.Item>

                    </MenuItemGroup>
                </SubMenu>
                <Menu.Item key="logout">
                    <Link to="javascript：void" onClick={this.logout.bind(this)}>登出</Link>
                </Menu.Item>
            </Menu>
        );
        const nologin = (
            <Menu
                mode="horizontal"
            >
                <Menu.Item key="mainpage">
                    <Link to="/">永老无别离</Link>
                </Menu.Item>
                <Menu.Item key="signup">
                    <a onClick={this.signupOnClick}>注册</a>
                </Menu.Item>
                <SubMenu title={<span className="submenu-title-wrapper">一点微小的贡献</span>}>
                    <MenuItemGroup title="Fgo">
                        <Menu.Item key="fgoap">
                            <Link to="/fgoap">fgo真好玩</Link>
                        </Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup title="阴阳师">
                        <Menu.Item key="yys">
                            <Link to="/yysnav">阴阳师</Link>
                        </Menu.Item>

                    </MenuItemGroup>
                </SubMenu>
                <Menu.Item key="login">
                    <Link to="/login">登录</Link>
                </Menu.Item>
            </Menu>
        )

        if (isAuthenticated === true) {
            if (permission === 'admin') {
                return admin
            } else {
                return guest
            }
        } else {
            return nologin
        }

    }


    signupOnClick = (e) => {
        e.preventDefault();
        this.setState({
            modalvisable: true
        })
    }
    handleCancel = () => {
        this.setState({
            modalvisable: false
        })
    }
    handleOk = () => {
        if(!this.state.isEmail||!this.state.email){
            message.error("邮箱不正确哦",5);
            this.setState({modalvisable:false});
        }else{
            axios.post('/api/signups/comfirmemail',{email:this.state.email}).then(
                res=>{
                    console.log(res.data)
                    if(res.data==="alreadyexist"){
                        message.error("邮箱已经注册过了",5);
                        this.setState({modalvisable:false});
                    }else if(res.data==="success"){
                        //需要一个发送邮件的库
                        this.sendemail(this.state.email);
                        message.success("验证邮件已经发送到邮箱，请检查邮箱",5);
                        this.setState({modalvisable:false});
                    }
                }
            )
        }
    }
    sendemail = (email)=>{
        // let transporter = nodemailer.createTransport({
        //     // host: 'smtp.ethereal.email',
        //     service: 'qq', // 使用了内置传输发送邮件 查看支持列表：https://nodemailer.com/smtp/well-known/
        //     port: 465, // SMTP 端口
        //     secureConnection: true, // 使用了 SSL
        //     auth: {
        //       user: '1144951039@qq.com',
        //       // 这里密码不是qq密码，是你设置的smtp授权码
        //       pass: 'qkjjdlfjlaogfjdd',
        //     }
        //   });
          
        //   let mailOptions = {
        //     from: '"永老无别离" <1144951039@qq.com>', // sender address
        //     to: `${email}`, // list of receivers
        //     subject: 'Hello', // Subject line
        //     // 发送text或者html格式
        //     // text: 'Hello world?', // plain text body
        //     html: '<b>Hello world?</b>' // html body
        //   };
          
        //   // send mail with defined transport object
        //   transporter.sendMail(mailOptions, (error, info) => {
        //     if (error) {
        //       return console.log(error);
        //     }
        //     console.log('Message sent: %s', info.messageId);
        //     // Message sent: <04ec7731-cc68-1ef6-303c-61b0f796b78f@qq.com>
        //   });
    }
    enteremail = (e) => {
        if (this.isEmail(e.target.value)) {
            this.setState({
                isEmail: true,
                email: e.target.value
            })
        } else {
            this.setState({
                isEmail: false,
                email: e.target.value

            })
        }
    }
    isEmail = (str) => {
        let re = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        if (re.test(str)) {
            return true
        } else {
            return false
        }
    }

    countDown(sec = 3, tickCallback,cb) {
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


    render() {
        const { isAuthenticated, permission } = this.props.login;
        let p = <p style={{margin:"15px 0 0 0",color:"red"}}>郵箱貌似不正確哦</p>
        return (
            <Fragment>
                {this.comfirm(isAuthenticated, permission)}
                <Modal
                    cancelText="取消"
                    okText="确定"
                    closable={false}
                    visible={this.state.modalvisable}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <Input
                        placeholder="请输入邮箱"
                        onChange={this.enteremail}
                    >
                    </Input>
                    <br />
                    {this.state.isEmail ? '' : p}
                </Modal>
            </Fragment>

        )
    }
}




const mapStateToProps = (state) => {
    return {
        login: state.login
    };
}
export default connect(mapStateToProps, { logout })(Nav);
