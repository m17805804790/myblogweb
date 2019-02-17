import React, { Component, Fragment } from 'react'
import { Card, Carousel } from 'antd';

class WorldStatus extends Component {
    constructor() {
        super();
        this.state = {
            地球:"",
            福尔图娜:"",
            希图斯:""

        }
    }
    componentDidMount(){
        

        this.setState({

        })
    }
    //要求传过来的数据为[{},{},{}]这样子的数组

    render() {
        return (
            <Card style={{ width: "100%" }}>
                
            </Card>
        )
    }
}

export default WorldStatus;