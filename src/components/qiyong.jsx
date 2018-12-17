import { message } from 'antd';
import React, { Component } from 'react';



export default class qiYong extends Component{
    info = () => {
    message.info('由于弃用element-react，此功能尚未重写，暂时弃用');
    };
    componentWillMount(){
        this.info();
    }
    

    render(){
        return (
            
            <div>wrong page</div>
            
        )
    }


}

