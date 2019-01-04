import React from 'react';
import {Input,Modal,message} from 'antd';
import MyBlog from '../myblog/Myblog';
import axios from 'axios';
import {connect} from 'react-redux';
import ('./LeaveMessage.css')
class LeaveMessage extends MyBlog{
    constructor(){
        super();
        this.state={
            message:'',
            isover35:false,
            modalvisible:true,
        }
    }
    textChange =(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleCancel = ()=>{
        this.props.history.push('/messagelist')
    }
    handleOk = (state)=>{
        if(!sessionStorage.messagenum){
            axios.post('/api/message/addnewmessage',{...state,date:this.getlocaltime(),messageauthor:this.props.username}).then(
                res=>{
                    sessionStorage.setItem('messagenum',1);
                    
                }
    
            )
        }else{
            message.info('太快了，喝杯茶休息一下')
        }
        
    }
    render(){  
        return(
            <div>
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
        username:state.login.username
    }
}
export default connect(mapStateToProps)(LeaveMessage);