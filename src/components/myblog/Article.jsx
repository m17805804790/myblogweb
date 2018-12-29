import React, { Component } from 'react'
import {Row, Col} from 'antd';
import axios from 'axios';
import marked from 'marked';
import hljs from 'highlight.js';
import('./Article.css');

export default class Article extends Component{
    constructor(){
        super()
        this.state={
            articlename:'',
            article:'',
            author:'',
            date:''
        }
    }
    componentWillMount() {
        let rendererMD = new marked.Renderer();
        marked.setOptions({
            renderer: rendererMD,
            gfm: true,
            tables: true,
            breaks: false,
            pedantic: false,
            sanitize: false,
            smartLists: true,
            smartypants: false,
            highlight: function (code) {
            return hljs.highlightAuto(code).value;}
        });
    }
    componentDidMount(){
        let testreg = /<script[^>]*>(?:.*?)<\/script>/;
        if(testreg.test(this.state.article)){
            this.props.history.push('/wrongpage')
        }else{
            if(this.props.match.params.articlename){
                axios.post('/api/article/getarticle',{articlename:this.props.match.params.articlename}).then(
                    (res) =>{
                        const {articlename,article,author,date} = res.data[0];
                        this.setState({
                            articlename,
                            article,
                            author,
                            date
                        })
                    }
                )
            }  
        }
    }
    
   



    render(){
        return(
            
            <div className="articlepage">
                <Row>
                    <Col className="articleaside" xs={0} sm={4} md={5}></Col>
                    <Col className="articleplace"xs={24}sm={16} md={14}>
                        <h1 style={{textAlign:'center',paddingTop:'10px'}}>{this.state.articlename}</h1>
                        <h6 style={{textAlign:'center'}}>{this.state.author} {this.state.date}</h6>
                        <div dangerouslySetInnerHTML={{__html:marked(this.state.article)}}></div>
                    
                    </Col>
                    <Col className="articleaside" xs={0} sm={4} md={5}></Col>
                </Row>
            </div>
        )
    }
}