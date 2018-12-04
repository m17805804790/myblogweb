import React, { Component } from 'react';
import {Slider,Dialog,Button} from 'element-react';
require('./Fgoap.css');

export default class Fgoap extends Component{
    constructor(){
        super();
        this.state={
            dialogVisible: false,
            hdname:'',
            asd:6,
            奇奇神酒:5
        }
    }

    onChange = (value) => {
        this.setState({
          xionggu: value,
        });
        
      }

//       <div>
//       <span>asd</span>
//       <Slider 
//           value={this.state.xionggu} 
//           showInput={true} 
//           onChange={this.onChange}
//       />
//   </div>


onChange = (value) => {
    this.setState({asd:value});
    console.log(this.state)
    
}
showinfo=()=>{
    this.setState({dialogVisible: true})
}
add=(a,b)=>{
    return a*b
}

// align-items-start 用于使同行的col不同高度
    render(){
        return(
            <div className="row align-items-start">    
                <div className="hdlist col-sm-3 ">
                    <h2>活动列表</h2>
                    
                    <h3 style={{cursor:'pointer'}} onClick={()=>this.setState({hdname:'asd'})}>asd</h3>
                    <h3 style={{cursor:'pointer'}}>asd</h3>
                    <h3 style={{cursor:'pointer'}}>asd</h3>
                    <h3 style={{cursor:'pointer'}}>asd</h3>
                    <h3 style={{cursor:'pointer'}}>asd</h3>
                    <h3 style={{cursor:'pointer'}}>asd</h3>
                    <h3 style={{cursor:'pointer'}}>asd</h3>
                    <h3 style={{cursor:'pointer'}}>asd</h3>
                    <h3 style={{cursor:'pointer'}}>asd</h3>
                    
                    
                </div>
                <div className="cailiaolist row col-sm-9">
                    <div className="col-sm-2 sucainame">
                        <p>asd</p>
                        <p>asd</p>
                    </div>
                    <div className="col-sm-10 sucaishuliang">
                        <Slider
                            name='asd'
                            showInput={true} 
                            showInputControls={false}
                            onChange={this.onChange}
                        >
                            
                        </Slider>
                        <Slider></Slider>
                        
                            <Button type="primary" style={{margin:'0 center'}}onClick={this.showinfo}>查看统计</Button>
                        
                    </div>
                </div>
                <Dialog
                    title="提示"
                    size="tiny"
                    visible={ this.state.dialogVisible }
                    onCancel={ () => this.setState({ dialogVisible: false }) }
                    lockScroll={ false }
                >
                    <Dialog.Body>
                    <span>{this.add(this.state.asd,this.state.奇奇神酒)}</span>
                    </Dialog.Body>
                    <Dialog.Footer className="dialog-footer">
                    
                    </Dialog.Footer>
                </Dialog>
            </div>
        )
    }
}