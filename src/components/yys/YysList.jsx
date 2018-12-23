import React, { Component,Fragment} from 'react';
import a from './info'
import ShowList from "./ShowList";
require('./YysList.css')
export default class YysList extends Component {
 
  constructor(){
    super();

    this.state = {
      shname:'1',
      YYSINFOVisible:false,
      
      
      

    }
  }
  onChangeState(stateName){ 
    this.setState(stateName) 
  } 
  get(rarity){
    let items=[];
    for(let i=0;i<a.length;i++){
      if(a[i].rarity===rarity){
        let ex=a[i].name;
        items.push(<div key={i} className="listitem"onClick={()=>this.setState({shname:ex,YYSINFOVisible:true})}>{a[i].cnname}</div>);
      } 
    }  
    
    return(
      <Fragment>{items}</Fragment> 
    )
  } 
  
  render() {
    return (
      <div className="yyscontainer" >
        <ShowList  nowstate={this.state} onClicked={this.onChangeState.bind(this)}/>
        <div className ="sh_class" >
          <div className="Nborder">{this.get('N')}</div>
          <div className="Rborer">{this.get('R')}</div>
          <div className="SRborder">{this.get('SR')}</div>
          <div className="SSRborder">{this.get('SSR')}</div>
        </div>
      </div>
      
    );
  }
}

