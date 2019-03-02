import React, { Component, Fragment } from 'react'
import { Card } from 'antd';

class WorldStatus extends Component {
    constructor() {
        super();
        this.state = {
            地球: "",
            福尔图娜: "",
            希图斯: ""

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
        const { cetusstate } = this.props;
        return (

            <Card title="希图斯状态" style={{ width: "100%" }}>
                    <p>{`希图斯：${this.confirmisDay(cetusstate.isDay)}`}</p>
                    <p>{}</p>

            </Card>

        )
    }
}

export default WorldStatus;