import React, { Component } from 'react'
import {Row, Col,Input,Button,notification} from 'antd';
import {connect} from 'react-redux';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

const {TextArea} =Input;






class WriteArticle extends Component {
    constructor(){
        super()
        this.state={
            articlename:'',
            article:'',
        }
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
        axios.post('/api/article/articlesave',{...state,date:this.getlocaltime(),author:this.props.username}).then(
            (res) =>{
                if(res.data==='success'){
                    this.opensuccess();
                    this.props.history.push(`/article/${state.articlename}`)
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
    render(){
        return(
            <div>
                <Row>
                    <Col className="articleaside" xs={0} sm={4} md={5}></Col>
                    <Col className="articleplace"xs={24}sm={16} md={14}>
                        <Input 
                            name='articlename'
                            placeholder="文章标题" 
                            value={this.state.articlename}
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
                    <Col className="articleaside" xs={0} sm={4} md={5}>
                        
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