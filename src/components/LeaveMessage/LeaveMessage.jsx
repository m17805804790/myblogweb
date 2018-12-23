import React, { Component } from 'react';
import {Button,Input} from 'antd';
require('./LeaveMessage.css')
const { TextArea } = Input;
export default class LeaveMessage extends Component{
    constructor(){
        super();
        this.state={
            message:'',
            btndisable:false,
            
        }
    }
    
    onChange(value) {
        this.setState({
            message:value,
        })
        
    }
    f(){
        console.log('asd')
    }
    submitmessage(){
        
        if(this.state.message===''){
            setTimeout(
                this.setState({btndisable:true}),100000
            )
            
            
        }
        
        
    }
    
    render(){
        
        return(
            <div>
                <TextArea 
                    placeholder="Autosize height based on content lines"
                    autosize
                    onChange={()=>this.onChange()} 
                />
                <Button type="primary" onClick={()=>this.submitmessage()} disabled={this.state.btndisable}>asdasd</Button>
            </div>
        )
    }
}