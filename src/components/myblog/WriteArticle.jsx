import React, { Component } from 'react'
import {Row, Col,Input,Button,notification} from 'antd';
import {connect} from 'react-redux';
import axios from 'axios';

const {TextArea} =Input;






class WriteArticle extends Component {
    constructor(){
        super()
        this.state={
            articlename:'',
            article:'',
            simple:''
        }
    }
    opensame(){
        notification.open({
            message: '失败',
            description: '存在相同的文章名',
            
          });
    }
    opensuccess(){
        notification.open({
            message: '写完啦',
            description: '成功',
            
          });
    }
    openfailure(){
        notification.open({
            message: '快去改bug',
            description: '失败',
            
          });
    }
    articlesave = (state) =>{
        axios.post('/api/article/articlesave',{articlename:this.state.articlename,article:this.b64EncodeUnicode(this.state.article),simple:this.state.simple,date:this.getlocaltime(),author:this.props.username}).then(
            (res) =>{
                if(res.data==='success'){
                    this.opensuccess();
                    this.props.history.push(`/article/${state.articlename}`)
                }else if(res.data==='存在相同的文章名'){    
                    this.opensame();
                }else{
                    this.openfailure();
                }
            }
        )
    }
    textChange =(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
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
            <div>
                <Row>
                    <Col  xs={0} sm={4} md={5}></Col>
                    <Col className="articleplace"xs={24}sm={16} md={14}>
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
                            onClick={()=>this.articlesave(this.state)}
                        >
                        点击发布
                        </Button>
                    </Col>
                    <Col  xs={0} sm={4} md={5}>
                    </Col>
                </Row>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        username:state.login.username
    }
}
export default connect(mapStateToProps)(WriteArticle);