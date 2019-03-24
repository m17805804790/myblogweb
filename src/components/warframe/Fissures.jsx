import React, { Component, Fragment } from 'react';
import { Card } from 'antd';
import timechange from '../../utils/timechange';
class Fissures extends Component {
    constructor() {
        super();
        this.state = {
            地球: "",
            福尔图娜: "",
            希图斯: "",
            cetuslefttime:"",
        }
    }
    componentDidMount() {
        
    }
    
    // renderfissures=(fissures)=>{
    //     let items=[];
    //     for(let i=0;i<fissures.length;i++){
    //         items.push()
    //     }
    // }
    render() {
        const { cetusstate,success,cetuslefttime } = this.props;
        if(success){
            return (
                <Card title="裂缝" style={{ width: "100%" }}>
                    
                </Card>
            )
        }else{
            return (
                <div></div>
            )
        }
    }
}

export default Fissures;