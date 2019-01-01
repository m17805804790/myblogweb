import React, { Component,Fragment } from 'react';
import {Row, Col,Divider} from 'antd';
import axios from 'axios';
import ArticleListBox from './ArticleListBox';
import('./ArticleList.less');






export default class ArticleList extends Component{
    constructor(){
        super();
        this.state={
            pagenum:1,
            maxpagenum:1,
            articlelist:[],
            
        }
        
    }
    componentDidMount(){
        axios.post('/api/article/getarticlelist').then(
            (res)=>{
                this.setState({
                    articlelist:res.data,
                    maxpagenum:Math.ceil(res.data.length/10)
                })
            }
        )
    }

    showArticleList(arr,pageindex,num){
        let items=[];
        if(arr.length!==0){
            if(arr.length<=num){
                for(let i=arr.length-1;i>=0;i--){
                    items.push(<ArticleListBox arr={arr[i]}key={i}/>)
                }
            }else{
                for(let j=arr.length-(pageindex-1)*num-1;j>=arr.length-pageindex*num&&j>=0;j--){
                    items.push(<ArticleListBox arr={arr[j]}key={j}/>)
                }
            }
            
            
        }
        return <Fragment>{items}</Fragment>
    }
    pageup = ()=>{
        if(this.state.pagenum>1){
            this.setState({
                pagenum:this.state.pagenum-1
            })
        }    
    }
    pagedown = ()=>{
        if(this.state.pagenum<this.state.maxpagenum){
            this.setState({
                pagenum:this.state.pagenum+1
            })
        }
    }
    articlepagination(maxpagenum){
        if(maxpagenum>1){
            return <div className="articlepagination">
                        <div className="pageup"onClick={this.pageup}>上一页</div>
                        <div className="pagedown"onClick={this.pagedown}>下一页</div>
                        <div className="showpagenum">{this.state.pagenum}/{this.state.maxpagenum}</div>
                    </div>
        }
    }
    render(){
        return(
            
            <Row>
                <Col xs={0} sm={4} md={5}></Col>
                <Col xs={24}sm={16} md={14}>
                    {this.showArticleList(this.state.articlelist,this.state.pagenum,10)}    
                    <Divider/>                             
                    {this.articlepagination(this.state.maxpagenum)}
                </Col>
                <Col xs={0} sm={4} md={5}></Col>
            </Row>
            
        )
    }
}
