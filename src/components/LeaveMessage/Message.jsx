import React, { Component } from 'react';
import {Row,Col,Menu} from 'antd';
import { Link } from 'react-router-dom';
import Axios from 'axios';

require('./Message.css')




const SubMenu = Menu.SubMenu;
class Message extends Component{
    constructor(){
        super();
        this.state={

        }
        
    }
    
    // getmessagelist(){
    //    Axios.post('/api/getmessages').then(
    //        (response) =>{
    //            console.log(response.data)
    //        }

    //    )
    // }
    render(){
        return(
            <div className="articlecontainer">
                <Row>
                    <Col xs={24}sm={6}> 
                            <Menu 
                                mode="inline"
                            >
                                <SubMenu key="sub1" title={<span><span>最近留言人</span></span>}>
                                    <Menu.Item key="1"><Link to="">1</Link></Menu.Item>
                                    <Menu.Item key="2"><Link to="">2</Link></Menu.Item>
                                    <Menu.Item key="3"><Link to="">3</Link></Menu.Item>
                                    <Menu.Item key="4"><Link to="">4</Link></Menu.Item>
                                </SubMenu>
                                
                            </Menu>
                    </Col>
                    <Col xs={24}sm={1}></Col>
                    <Col xs={24}sm={17}className="message">
                        <div className="riqi">2018.1.1</div>
                        <div className="zuozhe">陈缘</div>
                        <div className="neirong">
                            <p>
                                留言
                            </p>
                            {/* <button onClick={()=>this.getmessagelist()}> </button> */}
                    </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Message;