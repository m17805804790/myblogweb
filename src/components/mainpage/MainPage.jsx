import React, { Component } from 'react'
require('./MainPage.css');

export default class MainPage extends Component{

    render(){
        return(
            <div className="mainpage">
                <div className="picture">
                    <img src={require('../img/qingji.jpg') }alt={'asd'}></img>
                </div>
                <div className="picturewords">
                    <p>我老婆真可爱</p>
                    <p><a href="/aboutme">关于我</a></p>
                </div>
            </div>
            
           
        )
    }




}