import React, { Component } from 'react'
require('./Myself.css');

export default class Myself extends Component{

    render(){
        return(
            <div>
                <div className="mainpage2">
                    <div className="picture2">
                        <img src={require('../img/qingji.jpg')}></img>
                    </div>
                </div>
                <div className="picturewords2">
                    <p>一位热爱ACG的玩家</p>
                    <p>一只正在成长中的菜鸟</p>
                    <p>一头苦逼的前端程序猿</p>
                </div>
            </div>
           
        )
    }




}