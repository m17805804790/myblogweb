import React, { Component, Fragment } from 'react'
import { Card } from 'antd';
import {dealtimetamptotamp} from '../../utils/timechange'
class CetusStatus extends Component {
    constructor() {
        super();
        this.state = {
            地球: "",
            福尔图娜: "",
            希图斯: "",
            cetustime:"",
        }
    }
    componentDidMount() {
        if(this.props.cetusstate){
            let timetamp = dealtimetamptotamp(this.props.cetusstate.timeLeft)
            this.setState({
                cetustime:timetamp
            })
        }


    }
    confirmisDay=(isDay)=>{
        if(isDay){
            return "白天"
        }else{
            return "黑夜"
        }
    }
    timecountdown=(time)=>{
        setInterval(()=>{
            this.setState({
                cetustime:time
            })
        },1e3)
    }
    render() {
        const { cetusstate } = this.props;
        return (
            <Card title="希图斯状态" style={{ width: "100%" }}>
                    <p>{`希图斯：${this.confirmisDay(cetusstate.isDay)}`}</p>
                    <p>{`剩余时间:${this.state.cetustime}`}</p>

            </Card>

        )
    }
}

export default CetusStatus;