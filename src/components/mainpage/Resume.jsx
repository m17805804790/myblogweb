import React, { Component } from 'react'
import {Row,Col,Card} from 'antd';
import "./Resume.less";
export default class Resume extends Component{

    constructor(){
        super();
        this.state={
            shiningmode:false,
            btnname:"太土了"
        }
    }
    

   

    render(){
        return(
            <Row>
                <Col xs={0}sm={3}md={6}></Col>
                <Col className="resume-main"xs={24}sm={18}md={12}>
                    <Row className="resume-basic">
                    <Col xs={0}sm={0} md={7}style={{height:"250px"}}>
                        <img style={{height:"250px",width:"200px",alignItems:"center"}}src={require("../img/qingji.jpg")} alt="qj"/>
                    </Col>
                    <Col xs={0}sm={0}md={1}style={{height:"250px"}}>
                    
                    </Col>
                        <Col sm={24}md={16}style={{height:"250px"}}>
                            <Card style={{backgroundColor: "rgba(192, 253, 255, 0.932)"}}>
                                <div className="resume-basic-listitems">
                                    <p >姓名：陈缘</p>
                                </div>
                                <div className="resume-basic-listitems">
                                    <p >年龄：23</p>
                                </div>
                                <div className="resume-basic-listitems">
                                    <p >电话：17805804790</p>
                                </div>
                                <div className="resume-basic-listitems">
                                    <p >邮箱：1144951039@qq.com</p>
                                </div>
                                <div className="resume-basic-listitems">
                                    <p >籍贯：江苏江阴</p>
                                </div>
                                <div className="resume-basic-listitems">
                                    <p >求职意向：前端</p>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                    <div className="resume-box">
                        <p className="resume-box-title">教育背景</p>
                        <p className="resume-box-content">大学英语四级 </p>
                        <p className="resume-box-content">2015.9-~   浙江海洋大学本科 </p>
                    </div>
                    <div className="resume-box">
                        <p className="resume-box-title">擅长技能</p>
                        <p className="resume-box-content">能以原生js开发网页，目前使用SPA技术中的react框架进行网页的开发，熟悉redux,react-router,classnames等前端常用库，目前使用的ui库为antd。本博客的前端功能实现全部基于react，后端则使用了nodejs的express框架提供接口，数据库使用了mysql。</p>
                    </div>
                    <div className="resume-box">
                        <p className="resume-box-title">自我评价</p>
                        <p className="resume-box-content">喜欢追求新的技术，善于学习，能够快速接受由于某些原因带来的技术栈的改变。能够承受工作上带来的压力，在公司繁忙时能够主动加班。能很好处理和身边的人的关系。</p>
                    </div>
                    
                </Col>
                <Col xs={0}sm={3}md={6}></Col>
            </Row>
            
        )
    }
}