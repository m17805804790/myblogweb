import React, { Component } from 'react';
import {Row, Col,Pagination} from 'antd';
require('./ArticleList.css')
export default class ArticleList extends Component{
    constructor(){
        super()
    }
    componentDidMount(){
        
    }

    showArticleList(){
        
    }
    toArticlePage(){
        
    }

    render(){
        return(
            <div>
                <Row>
                    <Col className="articleaside" xs={0} sm={4} md={5}></Col>
                    <Col className="articleplace"xs={24}sm={16} md={14}>
                        <div className="articlelistbox">
                            <h2>React Router 中文文档（一）</h2>
                            <p>所有位置的基准 URL。如果你的应用程序部署在服务器的子目录，则需要将其设置为子目录。basename 的正确格式是前面有一个前导斜杠，但不能有尾部斜杠。如果为 true ，在导航的过程中整个页面将会刷新。一般情况下，只有在不支持 HTML5 history API 的浏览器中使用此功能。</p>
                        </div>
                        <div className="articlelistbox">
                            <h2>React Router 中文文档（一）</h2>
                            <p>所有位置的基准 URL。如果你的应用程序部署在服务器的子目录，则需要将其设置为子目录。basename 的正确格式是前面有一个前导斜杠，但不能有尾部斜杠。如果为 true ，在导航的过程中整个页面将会刷新。一般情况下，只有在不支持 HTML5 history API 的浏览器中使用此功能。</p>
                        </div><div className="articlelistbox">
                            <h2>React Router 中文文档（一）</h2>
                            <p>所有位置的基准 URL。如果你的应用程序部署在服务器的子目录，则需要将其设置为子目录。basename 的正确格式是前面有一个前导斜杠，但不能有尾部斜杠。如果为 true ，在导航的过程中整个页面将会刷新。一般情况下，只有在不支持 HTML5 history API 的浏览器中使用此功能。</p>
                        </div><div className="articlelistbox">
                            <h2>React Router 中文文档（一）</h2>
                            <p>所有位置的基准 URL。如果你的应用程序部署在服务器的子目录，则需要将其设置为子目录。basename 的正确格式是前面有一个前导斜杠，但不能有尾部斜杠。如果为 true ，在导航的过程中整个页面将会刷新。一般情况下，只有在不支持 HTML5 history API 的浏览器中使用此功能。</p>
                        </div>
                        <div className="articlelistbox">
                            <h2>React Router 中文文档（一）</h2>
                            <p>所有位置的基准 URL。如果你的应用程序部署在服务器的子目录，则需要将其设置为子目录。basename 的正确格式是前面有一个前导斜杠，但不能有尾部斜杠。如果为 true ，在导航的过程中整个页面将会刷新。一般情况下，只有在不支持 HTML5 history API 的浏览器中使用此功能。</p>
                        </div>
                       
                        
                        
                        
                        
                        <div className="articlepagination">
                            <div className="pageup">上一页</div>
                            <div className="pagedown">下一页</div>
                        </div>
                    </Col>
                    <Col className="articleaside" xs={0} sm={4} md={5}></Col>
                </Row>
            </div>
        )
    }
}