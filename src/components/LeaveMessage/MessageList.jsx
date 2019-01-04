import React, { Component ,Fragment} from 'react';
import axios from 'axios';
import Message from './Message';

export default class MessageList extends Component{
    constructor(){
        super();
        this.state={
            messagelist:[]
        }
    }
    componentDidMount(){
        axios.post('/api/message/getallmessage').then(
            res=>{
                this.setState({
                    messagelist:res.data
                })
            }
        )
    }
    showMessageList=(arr)=>{
        let items=[];
        if(arr.length!==0){
            for(let i=arr.length-1;i>=0;i--){
                items.push(<Message arr={arr[i]} index={i} key={i} />)
            }
        }
        return <Fragment>{items}</Fragment>
    }
    render(){
        return(
            <div>
                {this.showMessageList(this.state.messagelist)}
            </div>
        )
    }
}