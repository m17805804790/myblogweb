import React, { Component } from 'react';
import {Row, Col,Input,Button,notification} from 'antd';
import axios from 'axios'

const {TextArea} =Input;






export default class EditArticle extends Component{

    constructor(){
        super();
        this.state={
            oldarticlename:'',
            articlename:'',
            simple:'',
            article:''
           
        }
    }




    componentDidMount(){
        axios.post('/api/article/getarticle',{articlename:this.props.match.params.articlename}).then(
            res=>{
                let article =this.b64DecodeUnicode(res.data[0].article)
                this.setState({
                    oldarticlename:this.props.match.params.articlename,
                    articlename:this.props.match.params.articlename,
                    simple:this.props.match.params.simple,
                    article
                })
            }
        )
    }
    getlocaltime(){
        let date = new Date();
        let seperator1 = "-";
        let seperator2 = ":";
        let month = date.getMonth() + 1;
        let strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
                + " " + date.getHours() + seperator2 + date.getMinutes()
                + seperator2 + date.getSeconds();
        return currentdate;
    }
    textChange =(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    articleupdate = () =>{
        let article = this.b64EncodeUnicode(this.state.article);
        axios.post('/api/article/articleupdate',{articlename:this.state.articlename,article,oldarticlename:this.state.oldarticlename,simple:this.state.simple,date:this.getlocaltime()}).then(
            res=>{
                this.props.history.push('/articlelist')
            }   
        )
    }
    b64EncodeUnicode(str) {
        return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
            return String.fromCharCode('0x' + p1);
        }));
    }
    b64DecodeUnicode(str) {
        return decodeURIComponent(atob(str).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    }

    render(){
        return(
            <Row>
                <Col xs={0} sm={4} md={5}></Col>
                <Col xs={24}sm={16} md={14}>
                {console.log(this.state)}
                        <Input 
                            name='articlename'
                            placeholder="文章标题" 
                            value={this.state.articlename}
                            onChange={this.textChange}
                        />
                        <TextArea 
                            name='simple'
                            placeholder="简介" 
                            autosize
                            value={this.state.simple}
                            onChange={this.textChange}
                        />
                        <TextArea 
                            name='article'
                            placeholder="内容" 
                            autosize
                            value={this.state.article}
                            onChange={this.textChange}
                        />
                        <Button
                            type="primary"
                            onClick={this.articleupdate}
                        >
                        点击发布
                        </Button>
                </Col>
                <Col xs={0} sm={4} md={5}></Col>
            </Row>
        )
    }

}