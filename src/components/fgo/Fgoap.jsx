import React, { Component ,Fragment} from 'react';
import {Slider,Dialog,Button,Notification} from 'element-react';
import  fgosucai from './fgosucai';
require('./Fgoap.css');

export default class Fgoap extends Component{
    constructor(){
        super();
        this.state={
            btnability:false,
            dialogVisible: false,
            sucaiarr:[],
            hdname:'',
            golden:0,
            sliver:0,
            copper:0
           
        }
    }
    showinfo=()=>{
        this.setState({dialogVisible: true})             //显示dialog框
    }
    showsucailist= (arr) => {
        let items=[];
        
        for(let i=0;i<arr.length;i++){     
                items.push(
                    <Slider 
                    key={i}
                    max={arr[i][1]}
                    showInput={true} 
                    value={this.state.sucaiarr[i][4]}
                    showInputControls={false}
                    onChange={(value)=>{
                        arr[i][4]=value;
                        this.getfinal(arr)    //这个函数在下面定义了
                        this.setState({sucaiarr:arr})
                    }}
                    >
                    
                    </Slider>
                )
            }
            console.log(items)
        return(
            <Fragment>{items}</Fragment> 
        )
        
    }
    showsucainame= (arr) =>{
        let items=[];
        for(let i=0;i<arr.length;i++){
            items.push(
                <p key={i}>{arr[i][0]}</p>
            )   
            }
        return(
            <Fragment>{items}</Fragment> 
        )
    }
    getfinal = (arr) => {
        let gnum = 0;
        let snum = 0;
        let cnum = 0;
        for(let i=0;i<arr.length;i++){
            if(arr[i][3]==='金'){
                gnum +=arr[i][4]*arr[i][2]
            }
            if(arr[i][3]==='银'){
                snum +=arr[i][4]*arr[i][2]
            }
            if(arr[i][3]==='铜'){
                cnum +=arr[i][4]*arr[i][2]
            }
        }
        this.setState({
            golden:gnum,
            sliver:snum,
            copper:cnum
        })
        
    }
    wqdy = (arr) =>{
        if(arr.length===0){
            this.noarropen()
            this.setState({
                btnability:true
            })
        }
        else{
            let arr1 = this.state.sucaiarr;
            for(let i=0;i<arr1.length;i++){
                arr1[i][4]=arr1[i][1]
            }
            this.setState({
                sucaiarr:arr1.slice(0)
            })
            console.log(this.state)
            
        }
    }
    wxl = (arr) =>{
        if(arr.length===0){
            this.noarropen()
        }else{
            let arr1 = this.state.sucaiarr;
            for(let i=0;i<arr1.length;i++){
                arr1[4]=0
            }
            this.setState({
                sucaiarr:arr1.slice(0)
            })
        }
    }
    noarropen(){
        Notification({
            title: '您还没选择活动呢',
            message: '点击活动列表选择活动'
          });
    }


// align-items-start 用于使同行的col不同高度
    render(){
        
        return(
            
            <div className="row align-items-start">    
                <div className="hdlist col-sm-3 ">
                    <h2>活动列表</h2>
                    <h3 style={{cursor:'pointer'}} onClick={()=>this.setState({sucaiarr:fgosucai,btnability:false})}>万圣三期</h3>
                    <h3 style={{cursor:'pointer'}} onClick={()=>this.setState({sucaiarr:fgosucai})}>万圣三期</h3>
                </div>
                <div className="cailiaolist row col-sm-9">
                    <div className="col-sm-12 cx">
                        <Button className="bt1" type="primary" style={{margin:'0 center'}} disabled={this.state.btnability} onClick={()=>this.wqdy(this.state.sucaiarr)}>我全都要</Button>
                        <Button className="bt2" type="primary" style={{margin:'0 center'}} disabled={this.state.btnability} onClick={()=>this.wxl(this.state.sucaiarr)}>我咸了</Button>
                        <Button className="bt2" type="primary" style={{margin:'0 center'}}onClick={this.showinfo}>查看统计</Button>
                    </div>
                    <div className="col-sm-2 col-xs-3 sucainame">
                        {this.showsucainame(this.state.sucaiarr)}
                    </div>

                    <div className="col-sm-10 col-xs-9 sucaishuliang">
                        {this.showsucailist(this.state.sucaiarr)}
                    </div>
                </div>
                    <Dialog
                        title="大佬"
                        size="tiny"
                        visible={ this.state.dialogVisible }
                        onCancel={ () => this.setState({ dialogVisible: false }) }
                        lockScroll={ false }
                    >
                        <Dialog.Body>
                        <p>一共需要{this.state.golden}个金材料</p>
                        <p>一共需要{this.state.sliver}个银材料</p>
                        <p>一共需要{this.state.copper}个铜材料</p>
                        </Dialog.Body>
                        <Dialog.Footer className="dialog-footer">
                        </Dialog.Footer>
                    </Dialog>
            </div>
        )
    }
}