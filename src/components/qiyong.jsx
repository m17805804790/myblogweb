import { message } from 'antd';
import React, { Component } from 'react';



export default class qiYong extends Component{
    info = () => {
    message.info('你肯定干了什么见不得人的事');
    };
    componentWillMount(){
        this.info();
    }
    

    render(){
        return (
            
            <div>404:wrong page</div>
            
        )
    }


}

