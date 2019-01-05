import React, { Component } from 'react';
import {Row,Col, Button} from 'antd';
import classnames from 'classnames';
import Axios from 'axios';
import ('./Message.less');

class Message extends Component{
    constructor(){
        super();
        this.state={
            isborderblue:false,
            isbordergreen:false,
            isborderyellow:false
        }
    }
    
    componentDidMount(){
        this.comfirm(this.props.index)
    }
    comfirm = (index)=>{
        if(index%3===0){
            this.setState({isborderblue:true})
        }else if(index%3===1){
            this.setState({isbordergreen:true})
        }else{
            this.setState({isborderyellow:true})
        }
    }
    deletemessage=()=>{
        Axios.post('/api/message/deletemessage',{message:this.props.arr.message})
    }
    admindelete=(permission)=>{
        if(permission==="admin"){
            return <Button onClick={this.deletemessage}>删了</Button>
        }
    }
    render(){
        return(
            <Row>
                <Row className={classnames({"message-lightblue":this.state.isborderblue},{"message-lightgreen":this.state.isbordergreen},{"message-lightyellow":this.state.isborderyellow})}>
                    <Col  sm={4} className="messageinfo">
                        <div className="zuozhe">{this.props.arr.messageauthor}</div>
                    </Col>
                    <Col className="neirong" xs={24} sm={20}>
                        <p>{this.props.arr.message}</p>
                        {this.admindelete(this.props.permission)}
                    </Col>

                </Row>
            </Row>
        )
    }
}
export default Message;