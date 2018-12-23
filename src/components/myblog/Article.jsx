import React, { Component } from 'react'
import {Row, Col} from 'antd';
require('./Article.css');

export default class Article extends Component{
    constructor(){
        super()
    }
    





    render(){
        return(
            <div className="articlepage">
                <Row>
                    <Col className="articleaside" xs={0} sm={4} md={5}></Col>
                    <Col className="articleplace"xs={24}sm={16} md={14}>
                        <h1 style={{textAlign:'center',paddingTop:'10px'}}>标题</h1>
                        <h6 style={{textAlign:'center'}}>chenyuan 19960827</h6>
                        <p>asdasdasdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd asdddddddddddddddd</p>

                    </Col>
                    <Col className="articleaside" xs={0} sm={4} md={5}></Col>
                </Row>
            </div>
        )
    }
}