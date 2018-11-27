import React, { Component } from 'react';
import {Transfer,Notification} from 'element-react';
import fgosucai from './fgosucai';
require('./fgohd.css');




export default class Fgohd extends Component{
    constructor(props) {
        super(props);
        this.state = {
          value: [],
          golden:0,
          silver:0,
          copper:0,          //对应金银铜
         
        }
      
        this._handleChange = this.handleChange.bind(this);
      }
     
     
      directions='';
      
      get data() {
        const data = [];
        for (let i = 1; i <= fgosucai.length; i++) {
          data.push({
            value: i,
            desc:fgosucai[i-1][0]+fgosucai[i-1][1] ,
            disabled: i % 4 === 0
          });
        }
        
        return data;
      }
      
      handleChange(value, direction, movedKeys) {
        const {golden,silver,copper}=this.state;
        // console.log(value, direction, movedKeys);    // movedKeys 为这次移动的东西 右边同理   中间的direction为这次方向是什么？感觉没什么用？  可以拿来玩玩2333333
        this.setState({ value })                        //默认搬一种素材为全搬
        let goldens = golden;
        let silvers = silver;
        let coppers = copper;
        if(direction==='right'){
          for(let i=0;i<movedKeys.length;i++){

            if(fgosucai[movedKeys[i]-1][3]==='金'){
              goldens+=fgosucai[movedKeys[i]-1][2]*fgosucai[movedKeys[i]-1][1]
                  
            }
            if(fgosucai[movedKeys[i]-1][3]==='银'){
              silvers+=fgosucai[movedKeys[i]-1][2]*fgosucai[movedKeys[i]-1][1]
            }
            if(fgosucai[movedKeys[i]-1][3]==='铜'){
              coppers+=fgosucai[movedKeys[i]-1][2]*fgosucai[movedKeys[i]-1][1]
            }
                  
          }    
        }else{
          for(let i=0;i<movedKeys.length;i++){
            if(fgosucai[movedKeys[i]-1][3]==='金'){
              goldens-=fgosucai[movedKeys[i]-1][2]*fgosucai[movedKeys[i]-1][1]
            }
            if(fgosucai[movedKeys[i]-1][3]==='银'){
              silvers-=fgosucai[movedKeys[i]-1][2]*fgosucai[movedKeys[i]-1][1]
            }
            if(fgosucai[movedKeys[i]-1][3]==='铜'){
              coppers-=fgosucai[movedKeys[i]-1][2]*fgosucai[movedKeys[i]-1][1]
            }
          }
        }                                                                                   //简单的几何学（判断）决定最后的素材数量 


        this.setState({
            golden:goldens,
            silver:silvers,
            copper:coppers
        })
        //这儿可以玩玩direction
        if(direction==='right'){
            this.open();
        } 
        if(direction==='left'){
            this.open12();
        }    
      }
    open() {
        Notification({
          title: '大佬',
          message: '我他妈肝爆'
        });
      }  
    open12() {
        Notification({
          title: '？？？？？',
          message: '你确定要咸嘛，肝tmd',
          duration: 0
        });
      }



      
      render() {
        const { value } = this.state;
        return (
          <div>
            <div className="fgotransfer">  
              <Transfer
                  titles={['可搬素材 ', '我要搬的']}    //用于改变列表名
                  value={value}
                  leftFooter={'<-我全都要'}
                  rightFooter={'<-我咸了'}
                  propsAlias={{                       //数据来源别名懒得改了
                  key: 'value',
                  label: 'desc'
                  }}
                  
                  data={this.data}
                  onChange={this._handleChange}
                  >
              </Transfer>
            </div> 

            <div className="showsucai">
                   
                <p>本期需要<span>{this.state.golden}</span>个金材料</p>
                <p>本期需要<span>{this.state.silver}</span>个银材料</p>
                <p>本期需要<span>{this.state.copper}</span>个铜材料</p>
                
            </div>



          </div>
        )
      }   
        
    
      
      
}