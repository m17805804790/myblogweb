import React, { Fragment } from 'react'
import {Row, Col, Button,Modal,message} from 'antd';
import axios from 'axios';
import marked from 'marked';
import hljs from 'highlight.js';
import {connect} from 'react-redux';
import MyBlog from './Myblog'
import('./Article.less');

class Article extends MyBlog{
    constructor(){
        super()
        this.state={
            articlename:'',
            article:'',
            author:'',
            date:'',
            simple:'',
            visible:false
        }
    }
    componentWillMount() {
        let rendererMD = new marked.Renderer();
        marked.setOptions({
            renderer: rendererMD,
            gfm: true,
            tables: true,
            breaks: true    ,
            pedantic: false,
            sanitize: false,
            smartLists: true,
            smartypants: false,
            
            
        });
        marked.setOptions({
            highlight: code=> {
                return hljs.highlightAuto(code).value;}
        })
    }
    componentDidMount(){
        let testreg = /<script[^>]*>(?:.*?)<\/script>/;
        if(testreg.test(this.state.article)){
            this.props.history.push('/wrongpage')
        }else{
            if(this.props.match.params.articlename){
                axios.post('/api/article/getarticle',{articlename:this.props.match.params.articlename}).then(
                    (res) =>{
                        const {articlename,article,author,date,simple} = res.data[0];
                        this.setState({
                            articlename,
                            article:this.b64DecodeUnicode(article),
                            author,
                            date,
                            simple
                        })
                    }
                )
            }  
        }
    }
    pushtoedit = () =>{
        this.props.history.push(`/editarticle/${this.state.articlename}/${this.state.simple}`)
    }
    showdeleteModal = () => {
        this.setState({
          visible: true,
        });
    }
    showeditbutton(props){
        if(props.permission==='admin'){
            return <Fragment><Button onClick={this.pushtoedit}style={{width:'100%',marginTop:'100px'}}>好像有问题让我康康</Button>
            <Button onClick={this.showdeleteModal}style={{width:'100%'}}>这什么鬼玩意我删了</Button></Fragment>
        }
    }
    handleOk = (e) => {
        axios.post('/api/article/articledelete',{articlename:this.state.articlename}).then(
            res=>{
                if(res.data==='success'){
                    message.info('删除成功')
                    this.props.history.push('/articlelist')
                }
            }
        )
    }
    
    handleCancel = (e) => {
        this.setState({
          visible: false,
        });
    }
   



    render(){
        return(
                <Row>
                    <Col className="articleaside" xs={0} sm={4} md={5}></Col>
                    <Col className="article"xs={24} sm={16} md={14}>
                        <h1 style={{textAlign:'center',paddingTop:'10px'}}>{this.state.articlename}</h1>
                        <h6 style={{textAlign:'center'}}>最后编辑时间：{this.state.date}</h6>
                        <div className="articleplace"dangerouslySetInnerHTML={{__html:marked(this.state.article)}}></div>
                        {this.showeditbutton(this.props)}
                    </Col>
                    <Col className="articleaside" xs={0} sm={4} md={5}></Col>
                    <Modal
                    title="警告"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    confirmLoading={true}
                    closable={false}
                    >
                    <p>确定要删除嘛</p>
                    <p>数据库没备份的哦</p>
                    
                    </Modal>
                </Row>
            
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        permission: state.login.permission
      };
}
export default connect(mapStateToProps)(Article);