import React, { Component, Fragment } from 'react'
import { Card } from 'antd';
import timechange from '../../utils/timechange'
class CetusStatus extends Component {
    constructor() {
        super();
        this.state = {
            cetuslefttime:"",
        }
    }
    componentDidMount() {
        
    }
    confirmisDay=(isDay)=>{
        if(isDay){
            return "白天"
        }else{
            return "黑夜"
        }
    }
    
    render() {
        const { cetusstate,success,cetuslefttime } = this.props;
        if(success){
            return (
                <Card title="希图斯状态" style={{ width: "100%" }}>
                        <p>{`希图斯：${cetusstate.isDay?"白天":"黑夜"}`}</p>
                        <p>{`剩余时间:${timechange(cetuslefttime,false)}`}</p>
                </Card>
    
            )
        }else{
            return (
                <div></div>
            )
        }
    }
}

export default CetusStatus;