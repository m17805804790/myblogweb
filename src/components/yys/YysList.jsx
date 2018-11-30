import React, { Component,Fragment} from 'react';
import {Dialog} from 'element-react'
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
      rarity:'',
      finalplace:[],
      counter:0,

    }
  }
      
  findplace(){
      let arr = [];
      for(let i=0;i<a.length;i++){
          if(a.name===this.state.shname){
               arr.push(a[i].place.map((place,i)=><li key={i}>{place}</li>));
          }
      }
      
  } 
  getrarity(){
      let rarity1 = '';
      for(let i=0;i<a.length;i++){
          if(a[i].name===this.state.shname){
             rarity1=a[i].rarity
          }
      }
      this.setState({rarity:rarity1})              
  }  
      
  




  getP(){
    var items=[];
    for(let i=0;i<=63;i++){
      let ex=a[i].name;
       items.push(<li key={i}><div><a href="#"><img onClick={()=>{this.setState({shname:ex,dialogVisible:true})}}alt={ex} src={require('../img/'+ex+'.png') } /></a></div></li>);
       
    }  //render出所有的式神图片
    
    return(
      <Fragment>{items}</Fragment> 
    )
  } 
  
  render() {
    
    console.log(this.state)
    
    return (
      
      <div className="yyscontainer" >
        <Dialog
          title="提示"
          size="tiny" 
          visible={ this.state.dialogVisible }
          onCancel={ () => this.setState({ dialogVisible: false }) }
          lockScroll={ false }>
          
          <Dialog.Body>
            <div>
            <span>{this.state.counter}</span>
              <ul>
                 
              </ul>
              {}
            </div>
           
          </Dialog.Body>
        </Dialog>
        <div className ="sh_class" >
          <ul>
            {this.getP()}
          </ul>
        </div>
        
        
                
        
      </div>
      
    );
  }
}

