import React, { Component } from 'react';
import('./MainPage.less');
export default class MainPage extends Component{

    render(){
        return(
            <div className="mainpage">
                <div className="picture">
                    <img src={require('../img/qingji.jpg') }alt={'老婆'}></img>
                </div>
                <div className="picturewords">
                    <p>↑我老婆真可爱0.0</p>
                    <p><a href="/aboutme">关于我</a></p>
                </div>
            </div>
            
           
        )
    }




}