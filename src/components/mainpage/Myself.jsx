import React, { Component } from 'react'
require('./Myself.css');

export default class Myself extends Component{

    render(){
        return(
            <div>
                <div className="mainpage2">
                    <div className="picture2">
                        <img src={require('../img/qingji.jpg')}alt={'老婆'}></img>
                    </div>
                </div>
                <div className="picturewords2">
                    <p>ACG爱好者</p>
                    <p>WARFRAME爱好者</p>
                    <p>前端爱好者</p>
                </div>
            </div>
           
        )
    }




}