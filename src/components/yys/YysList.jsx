import React, { Component,Fragment} from 'react';

import a from './info'
import ShowList from "./ShowList";
require('./YysList.css')
export default class YysList extends Component {
 
  constructor(){
    super();

    this.state = {
      place:a[0].place,
      shname:'1',
      dialogVisible:false,
      
      
      

    }
  }
      
  
      
  



  onChangeState(stateName){ 
    this.setState(stateName) 
  } 
  getP(){
    let items=[];
    for(let i=0;i<a.length;i++){
      let ex=a[i].name;
       items.push(<li key={i}><div><a href="javascript:void"><img onClick={()=>{this.setState({shname:ex,dialogVisible:true})}}alt={ex} src={require('../img/'+ex+'.png') } /></a></div></li>);
       
    }  //render出所有的式神图片
    
    return(
      <Fragment>{items}</Fragment> 
    )
  } 
  
  render() {
    
    console.log(this.state)
    
    return (
      
      <div className="yyscontainer" >
        <ShowList  nowstate={this.state} onClicked={this.onChangeState.bind(this)}/>
        <div className ="sh_class" >
          <ul>
            {this.getP()}
          </ul>
        </div>
        
        
                
        
      </div>
      
    );
  }
}

