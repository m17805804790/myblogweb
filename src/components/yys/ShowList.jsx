import React, { Component} from 'react';
import {Dialog} from 'element-react'
import a from './info';
require('./ShowList.css')

export default class ShowList extends Component{
    constructor(){
        super()
        this.state={
            dialogVisible:false
        }
    }
    findplace(){
        
        for(let i=0;i<a.length;i++){
            if(a[i].name===this.props.nowstate.shname){
                return a[i].place.map((place,i)=><li key={i}>{place}</li>)
            }
        }
        
    } 
    getrarity(){
        for(let i=0;i<a.length;i++){
            if(a[i].name===this.props.nowstate.shname){
                return <p>{a[i].rarity}</p>
            }
        }             
    }
    
    


    render(){
        
        return(
            <div className='showlist'>

                <Dialog
                    title="信息"
                    size="tiny" 
                    visible={ this.props.nowstate.dialogVisible }
                    onCancel={ () => this.props.onClicked({ dialogVisible: false }) }
                    lockScroll={ false }>
                
                    <Dialog.Body>
                        <div>
                        <span>{this.getrarity()}</span>
                        <ul>
                            {this.findplace()}
                        </ul>
                        {}
                        </div>
                    
                    </Dialog.Body>
                </Dialog>
            </div>
      
        )
    }



}