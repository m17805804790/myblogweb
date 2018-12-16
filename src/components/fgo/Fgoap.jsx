import React, { Component ,Fragment} from 'react';
import 'antd/dist/antd.css';
import { Slider,Button,Modal,Col,Row,InputNumber,notification,Select } from 'antd';
import  fgosucai from './fgosucai';
require('./Fgoap.css');
const Option = Select.Option;
export default class Fgoap extends Component{
    constructor(){
        super();
        this.state={
            btnability:false,
            dialogVisibletj: false,
            dialogVisiblesz:false,
            sucaiarr:[],
            hdname:'',
            golden:0,
            sliver:0,
            copper:0,
            goldenplus:0,
            sliverplus:0,
            copperplus:0,
            goldenbasic:0,
            sliverbasic:0,
            copperbasic:0,
            smode:'',
           
        }
    }
    
    showinfo=(arr)=>{
        if(arr.length===0){
            notification.open({
                message: '没有选择活动',
                description: '选择活动列表下活动',
            });
            this.setState({
                btnability:true
            })
         
        }else{ 
            this.setState({
                dialogVisibletj: true
            }) 
        }            //显示dialog框
    }
    showsucailist (arr)  {
        let items=[];
        for(let i=0;i<arr.length;i++){     
                items.push(
                    <Row key={i}>
                        <Col span={12}>
                        <Slider 
                            key={i}
                            max={arr[i][1]}
                            value={arr[i][4]}
                            showInputControls={false}
                            onChange={(value)=>{
                                arr[i][4]=value;
                                this.getfinal(arr)    //这个函数在下面定义了
                                this.setState({sucaiarr:arr})
                            }}
                            >
                        </Slider>
                        </Col>
                        <Col span={4}>
                        <InputNumber 
                            key={i}
                            min={0} 
                            max={20} 
                            style={{ marginLeft: 16 }}
                            value={arr[i][4]} 
                            onChange={(value)=>{
                                arr[i][4]=value;
                                this.getfinal(arr)    //这个函数在下面定义了
                                this.setState({sucaiarr:arr})
                                console.log(this.state)
                            }}
                        />
                        </Col>
                    </Row>
                )
            }
            
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
    wqdy = (arr) =>{    //我全都要
        if(arr.length===0){
            notification.open({
                message: 'caonima',
                description: 'fuck',
            });
            this.setState({
                btnability:true
            })
         
        }
        else{
            let nowarr = this.state.sucaiarr.map((v,i)=>
            v[4]===v[1]?v:v.map((vv,ii)=>ii===4?v[1]:vv)

             )
            this.setState({
                sucaiarr:nowarr
            })
            this.getfinal(nowarr);
        }
    }
    wxl = (arr) =>{
        if(arr.length===0){
            notification.open({
                message: 'caonima',
                description: 'fuck',
            });
            this.setState({
                btnability:true
            })
        }else{
            let nowarr = this.state.sucaiarr.map((v,i)=>
            v[4]===0?v:v.map((vv,ii)=>ii===4?0:vv)

             )
            this.setState({
                sucaiarr:nowarr
            })
            this.getfinal(nowarr);
        }
    }
    
    
    

// align-items-start 用于使同行的col不同高度
    render(){
        
        return(
            
            <Row className="allcomponent"> 
                <Col xs={24} sm={6} className="hdlist">
                    <h2>活动列表</h2>
                    <h3 style={{cursor:'pointer'}} onClick={()=>this.setState({sucaiarr:fgosucai,btnability:false})}>万圣三期</h3>
                    
                </Col>
                <Col xs={24} sm={18}className="cailiaolist">
                    <Row>
                        <Col span={24}className="cx">
                            <Button className="bt1" type="primary" style={{float:'left'}} disabled={this.state.btnability} onClick={()=>this.wqdy(this.state.sucaiarr)}>我全都要</Button>
                            <Button className="bt2" type="primary" style={{float:'left'}} disabled={this.state.btnability} onClick={()=>this.wxl(this.state.sucaiarr)}>我咸了</Button>
                            <Button className="bt2" type="primary" style={{float:'left'}} disabled={this.state.btnability} onClick={()=>this.setState({dialogVisiblesz:true})}>设置加成等</Button>
                            <Button className="bt2" type="primary" style={{float:'left'}} disabled={this.state.btnability} onClick={()=>this.showinfo(this.state.sucaiarr)}>查看统计</Button>
                        </Col>
                        <Col span={6}className="sucainame">
                            {this.showsucainame(this.state.sucaiarr)}
                        </Col>

                        <Col span={18}className="sucaishuliang">
                            {this.showsucailist(this.state.sucaiarr)}
                        </Col>
                    </Row>
                </Col>
                
                    <Modal
                        title="大佬"
                        size="tiny"
                        visible={ this.state.dialogVisibletj }
                        onCancel={ () => this.setState({ dialogVisibletj: false }) }
                        lockScroll={ false }
                        footer={null}
                    >
                        
                        <p>一共需要{this.state.golden}个金材料</p>
                        <p>一共需要{this.state.sliver}个银材料</p>
                        <p>一共需要{this.state.copper}个铜材料</p>
                        
                    </Modal>
                    <Modal
                        title="asd"
                        size="tiny"
                        visible={ this.state.dialogVisiblesz }
                        onCancel={ () => this.setState({ dialogVisiblesz: false }) }
                        lockScroll={ false }
                        footer={null}
                    >
                        <Select defaultValue="a" style={{ width: 120 }} onChange={(v)=>this.setState({smode:v})}>
                            <Option value="a">金银混合+铜</Option>
                            <Option value="b">金铜混合+银</Option>
                            <Option value="c">金+铜银混合</Option>
                            <Option value="d">金+银+铜</Option>
                        </Select>
                        <br />
                        <InputNumber min={0} max={12} defaultValue={1} value={this.state.goldenplus}onChange={(v)=>this.setState({goldenplus:v})} />
                        <InputNumber min={0} max={12} defaultValue={1} value={this.state.goldenplus}onChange={(v)=>this.setState({goldenplus:v})} />
                        <InputNumber min={0} max={12} defaultValue={1} value={this.state.goldenplus}onChange={(v)=>this.setState({goldenplus:v})} />
                        <br />
                        <InputNumber min={0} max={12} defaultValue={1} value={this.state.goldenbasic}onChange={(v)=>this.setState({goldenbasic:v})} />
                        <InputNumber min={0} max={12} defaultValue={1} value={this.state.goldenbasic}onChange={(v)=>this.setState({goldenbasic:v})} />
                        <InputNumber min={0} max={12} defaultValue={1} value={this.state.goldenbasic}onChange={(v)=>this.setState({goldenbasic:v})} />
                    </Modal>
            </Row> 
        )
    }
}