import React, { Component } from 'react'

export default class IE extends Component{
    render(){
        return(
            <div>
                你正在使用一个<strong>过时</strong>的浏览器。请<a class="link" href="https://www.google.cn/chrome/">升级你的浏览器</a>以查看此页面。
            </div>
        )
    }
}