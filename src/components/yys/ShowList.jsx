import React, { Component} from 'react';
require('./ShowList.css')

export default class ShowList extends Component{
    
    findplace(){
        for(let i=0;i<=this.props.arr.length-1;i++){
            if(this.props.arr[i].name===this.props.p){
                return this.props.arr[i].place.map((place,i)=><li key={i}>{place}</li>)
            }
        }
    } 
    getrarity(){
        for(let i=0;i<=this.props.arr.length-1;i++){
            if(this.props.arr[i].name===this.props.p){
                return <p>{this.props.arr[i].rarity}</p>
            }
        }             
    }
    
    


    render(){
        return(
            <div className='showlist'>
                {this.getrarity()}
                <ul>
                    {this.findplace()}
                </ul>
            </div>
      
        )
    }



}