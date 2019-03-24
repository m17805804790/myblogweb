import React, { Component, Fragment } from 'react';
import { Card } from 'antd';
import timechange from '../../utils/timechange';
class Fissures extends Component {
    constructor() {
        super();
        this.state = {
            lefttime: "",
            fissures:"",
        }
    }
    componentDidMount() {

    }

    renderfissures = (fissures) => {
        let items = [];
        for (let i = 0; i < fissures.length; i++) {
            items.push()
        }
    }
    tick=(fissures)=>{
        setInterval(()=>{
            for (let i = 0; i < fissures.length; i++) {
                this.setState({lefttime:this.state.lefttime.map(v=>v-1)})
            }
        },1e3)
    }
    render() {
        const { fissures, success } = this.props;
        if (success) {
            return (
                <Card title="裂缝" style={{ width: "100%" }}>
                                         
                </Card>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
}

export default Fissures;