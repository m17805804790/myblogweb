import React, { Component } from 'react';
import { Link } from "react-router-dom";
import('./MainPage.less');
export default class MainPage extends Component {
    constructor() {
        super();
        this.state = {
            whichdiv: true
        }
    }



    isIEVersion() {
        var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
        var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
        var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
        var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
        if (isIE) {
            var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
            reIE.test(userAgent);
            var fIEVersion = parseFloat(RegExp["$1"]);
            if (fIEVersion === 7) {
                return 7;
            } else if (fIEVersion === 8) {
                return 8;
            } else if (fIEVersion === 9) {
                return 9;
            } else if (fIEVersion === 10) {
                return 10;
            } else {
                return 6;//IE版本<=7
            }
        } else if (isEdge) {
            return 'edge';//edge
        } else if (isIE11) {
            return 11; //IE11
        } else {
            return -1;//不是ie浏览器
        }
    }

    componentWillMount() {
        if (!this.isIEVersion) {
            this.props.history.push('/ie')
        }
    }
    whichdiv(state) {
        const div1 = (
            <div className="picturewords">
                <p className="hoverblue" >永老无别离的个人博客</p>
                <p className="hoverpoint activelink" onClick={() => { this.setState({ whichdiv: false }) }}>关于我</p>
            </div>
        )
        const div2 = (
            <div className="picturewords">
                <p>ACG爱好者</p>
                <p>WARFRAME爱好者</p>
                <p>前端爱好者</p>
                <p><Link to="/resume" className="activelink">个人简历</Link></p>
                <p className="hoverpoint activelink" onClick={() => this.setState({ whichdiv: true })}>返回</p>
            </div>
        )
        if (state === true) {
            return div1
        } else {
            return div2
        }
    }
    render() {
        return (
            <div className="mainpage">
                <div className="picture">
                    <img src={require('../img/qingji.jpg')} alt={'老婆'}></img>
                </div>
                {this.whichdiv(this.state.whichdiv)}
            </div>


        )
    }




}