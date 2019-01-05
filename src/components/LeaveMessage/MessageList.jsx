import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {Input,Modal,message,Button} from 'antd';
import MyBlog from '../myblog/Myblog';
import Message from './Message';

class MessageList extends MyBlog{
    constructor(){
        super();
        this.state={
            messagelist:[],
            pagenum:1,
            maxpagenum:1,
            message:'',
            isover35:false,
            modalvisible:false
        }
    }
    componentDidMount(){
        axios.post('/api/message/getallmessage').then(
            res=>{
                this.setState({
                    messagelist:res.data,
                    maxpagenum:Math.ceil(res.data.length/15)
                })
            }
        )
    }
    textChange =(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleCancel = ()=>{
        this.setState({modalvisible:false})
    }
    setCookie(name,value,time){
        let strsec = this.getsec(time);
        let exp = new Date();
        exp.setTime(exp.getTime() + strsec*1);
        document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
    }
    getsec(str){
        let str1=str.substring(1,str.length)*1;
        let str2=str.substring(0,1);
        if (str2==="s")
        {
        return str1*1000;
        }
        else if (str2==="h")
        {
        return str1*60*60*1000;
        }
        else if (str2==="d")
        {
        return str1*24*60*60*1000;
        }
    }
    //这是有设定过期时间的使用示例：
    //s20是代表20秒
    //h是指小时，如12小时则是：h12
    //d是天数，30天则：d30
    getCookie(name){
        let arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
        arr=document.cookie.match(reg)
        if(arr){
            return unescape(arr[2]);
        }else{
            return null;
        }
    }
    handleOk = (state)=>{
        if(!this.getCookie("leavemessagetime")){
            axios.post('/api/message/addnewmessage',{...state,date:this.getlocaltime(),messageauthor:this.props.username}).then(
                res=>{
                    this.setCookie("leavemessagetime",1,"s30");
                    message.success('成功');
                    window.location.reload();   //强制刷新
                }
    
            )
        }else{
            message.warning('太快了，喝杯茶休息一下');
            this.setState({modalvisible:false})
        }
        
    }
    showMessageList=(arr,pageindex,num)=>{
        let items=[];
        if(arr.length!==0){
            if(arr.length<=num){
                for(let i=arr.length-1;i>=0;i--){
                    items.push(<Message arr={arr[i]} index={i} key={i} permission={this.props.permission}/>)
                }
            }else{
                for(let j=arr.length-(pageindex-1)*num-1;j>=arr.length-pageindex*num&&j>=0;j--){
                    items.push(<Message arr={arr[j]} index={j} key={j} permission={this.props.permission}/>)
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
            <div>
                {this.showMessageList(this.state.messagelist,this.state.pagenum,15)}
                <Button type="primary"onClick={()=>this.setState({modalvisible:true})}style={{width:"100%"}}>也在这儿留下你想说的吧</Button>
                {this.articlepagination(this.state.maxpagenum)}
                <Modal
                    cancelText="取消"
                    okText="留言"
                    closable={false}
                    title="写下你的留言吧"
                    visible={this.state.modalvisible}
                    onOk={()=>this.handleOk(this.state)}
                    onCancel={this.handleCancel}
                    >
                 <Input 
                    name='message'
                    placeholder="输入你的留言"
                    onChange={this.textChange} 
                />
                </Modal>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        username:state.login.username,
        permission:state.login.permission
    }
}
export default connect(mapStateToProps)(MessageList);