import React, { Component,Fragment } from 'react';
import colorRGBtoHex from 'colorRGBtoHex';
import { Row, Col,Input } from 'antd';
export default class RgbTo16 extends Component{
    constructor(){
        super();
        this.state={
            R:0,
            G:0,
            B:0,
            hex:"",
        }
    }
    componentDidMount(){
        this.setState({
            hex:colorRGBtoHex(this.state.R,this.state.G,this.state.B)
        })
    }
    onChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render(){
        return(
            <div>
                <Input
                    name="R"
                    addonBefore="R"
                    defaultValue={0}
                    onChange={this.onChange}
                >
                </Input>
                <Input
                    name="G"
                    addonBefore="G"
                    defaultValue={0}
                    onChange={this.onChange}
                >
                </Input>
                <Input
                    name="B"
                    addonBefore="B"
                    defaultValue={0}
                    onChange={this.onChange}
                >
                </Input>
                <p>{this.state.hex}</p>
            </div>
        )
    }

}