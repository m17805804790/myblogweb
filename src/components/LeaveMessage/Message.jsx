import React, { Component } from 'react';
import {Row,Col} from 'antd';
import classnames from 'classnames';
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
    
    render(){
        return(
            <Row>
                <Row className={classnames({"message-lightblue":this.state.isborderblue},{"message-lightgreen":this.state.isbordergreen},{"message-lightyellow":this.state.isborderyellow})}>
                    <Col  sm={4} className="messageinfo">
                        <div className="shijian">{this.props.arr.date}</div>
                        <div className="zuozhe">{this.props.arr.messageauthor}</div>
                    </Col>
                    <Col className="neirong" xs={24} sm={20}>
                        <p>{this.props.arr.message}</p>
                    </Col>
                </Row>
            </Row>
        )
    }
}
export default Message;