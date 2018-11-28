import React, { Component } from 'react';
import {Input,Button} from 'element-react';
require('./LeaveMessage.css')

export default class LeaveMessage extends Component{
    constructor(){
        super();
        this.state={
            leavemessage:'',
            messagearr:[],
        }
    }
    
    onChange(value) {
        this.setState({
            leavemessage:value,
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
    }      //获得当前时间 格式为  2018-11-28 20:11:1
    addleavemessage(){
        let arr1 = [this.getlocaltime(),this.state.leavemessage];
        let messageli =this.state.messagearr;
        messageli.push(arr1);
        this.setState({
            messagearr:messageli
        })
    }      //将数组传入state
    rendermessage(){
        let le = this.state.messagearr;
        for(let i=0;i<le.length;i++){
            return le.map((x,i)=>
                <tbody key={i}>
                    <tr>
                        <td>{x[0]}</td>
                        <td>{x[0]}</td>
                        <td>{x[1]}</td>
                    </tr>
                </tbody>)
        }
    }   //输入数组于表格

    render(){
        
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
                        {this.rendermessage()}
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
                        onClick={this.addleavemessage.bind(this)}
                        >提交</Button>
                    </div>
                    
                </div>
            </div>
        )
    }
}