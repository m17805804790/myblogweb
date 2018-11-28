import React, { Component } from 'react';
import {Input,Button} from 'element-react';
require('./LeaveMessage.css')

export default class LeaveMessage extends Component{
    constructor(){
        super();
        this.state={
            leavemessage:'',
        }
    }
    
    onChange(value) {
        this.setState({
            leavemessage:value,
        })
        
    }
    getlocaltime(){
        let nowdatetime =new Date();
        return nowdatetime.toLocaleString;
    }
    addleavemessage(){
        let arr1 = [this.getlocaltime(),this.state.leavemessage];
        console.log(arr1)
        
    }

    render(){
        const messagearr = [];
        return(
            <div>
                <div className="messagelist">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th style={{width:'10%'}}>谁干的</th>
                                <th style={{width:'10%'}}>啥时候</th>
                                <th>干了啥</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>陈缘</td>
                                <td>14:39</td>
                                <td>哔了狗</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>陈缘</td>
                                <td>14:39</td>
                                <td>哔了狗</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="messageaction">
                    <div className="messagecontent">
                        <Input 
                        placeholder="请输入内容" 
                        type="text"
                        onChange={this.onChange.bind(this)}
                        name='leavemessage'
                        
                        />
                        <Button 
                        type="primary"
                        onClick={this.addleavemessage()}
                        >提交</Button>
                    </div>
                    
                </div>
            </div>
        )
    }
}