import React, { Component} from 'react';
import {Dialog} from 'element-react'
import a from './info';
require('./ShowList.css')

export default class ShowList extends Component{
   
    findplace(){
        
        for(let i=0;i<a.length;i++){
            if(a[i].name===this.props.nowstate.shname){
                return a[i].place.map((place,i)=><li key={i}>{place}</li>)
            }
        }
        
    } 
    render(){  
        return(
            <div className='showlist'>
                <Dialog
                    className="yysdialog"
                    title="式神信息"
                    size="tiny" 
                    visible={ this.props.nowstate.dialogVisible }
                    onCancel={ () => this.props.onClicked({ dialogVisible: false }) }
                    lockScroll={ false }>
                    <Dialog.Body>
                        <div>
                        <ul>
                            {this.findplace()}
                        </ul>
                        </div>
                    </Dialog.Body>
                </Dialog>
            </div>
      
        )
    }



}