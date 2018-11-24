import React, { Component,Fragment} from 'react';
import a from './info'
import ShowList from "./ShowList";
require('./YysList.css')
export default class YysList extends Component {
 
  constructor(){
    super();

    this.state = {
      place:a[0].place,
      shname:'1'};
  }
      
    
 
    getP(){
    var items=[];
    for(let i=0;i<=63;i++){
      let ex=a[i].name;
       items.push(<li key={i}><div><a href="#"><img onClick={()=>{this.setState({shname:ex})}}alt={ex} src={require('../img/'+ex+'.png') } /></a></div></li>);
    }
    
    return(
      <Fragment>{items}</Fragment> 
    )
  } 
  
  render() {
    const place = a;
    return (
      
      <div >
        <div className ="sh_class" >
          <ul>
              {this.getP()}
          </ul>
        </div>
        <ShowList arr={place} p={this.state.shname}/>
        
                
        
      </div>
      
    );
  }
}

