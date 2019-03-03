import React, { Component } from 'react'
import axios from 'axios';
import { Col, Row, Layout } from 'antd';
import deepTranslate from '../../utils/translate';
import WarframeSiderNav from './WarframeSiderNav';
import WarframeSiderNavHide from './WarframeSiderNavHide';
import CetusStatus from './CetusStatus';


import ("./Warframe.less");




const {  Content } = Layout;
class Warframe extends Component {
    constructor() {
        super();
        this.state = {
            warframeinfo: {},
            SiderNavisshow: false
        }
    }
    b64EncodeUnicode(str) {
        return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
            return String.fromCharCode('0x' + p1);
        }));
    }
    b64DecodeUnicode(str) {
        return decodeURIComponent(atob(str).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    }
    setCookie(name, value, time) {
        let strsec = this.getsec(time);
        let exp = new Date();
        exp.setTime(exp.getTime() + strsec * 1);
        document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
    }
    getsec(str) {
        let str1 = str.substring(1, str.length) * 1;
        let str2 = str.substring(0, 1);
        if (str2 === "s") {
            return str1 * 1000;
        }
        else if (str2 === "h") {
            return str1 * 60 * 60 * 1000;
        }
        else if (str2 === "d") {
            return str1 * 24 * 60 * 60 * 1000;
        }
    }
    //这是有设定过期时间的使用示例：
    //s20是代表20秒
    //h是指小时，如12小时则是：h12
    //d是天数，30天则：d30
    getCookie(name) {
        let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        arr = document.cookie.match(reg)
        if (arr) {
            return unescape(arr[2]);
        } else {
            return null;
        }
    }
    getInfo = () => {
        axios.get(`https://api.warframestat.us/pc`).then(
            res => {
                this.setState({
                    warframeinfo: deepTranslate(res.data)
                })
                
            }
        )

    }
    
    keepupdate = (ms) => {
        setInterval(this.getInfo(), ms)
    }
    //暂时不做优化
    
    


    changeSiderNav=()=>{
        this.setState({
            SiderNavisshow:this.state.SiderNavisshow?false:true
        })
    }
    //用于切换垂直导航栏
    
    
    componentDidMount() {
        this.getInfo();
    }
    render() {
        console.log(this.state)
        return (
            <Layout>
              {this.state.SiderNavisshow?<WarframeSiderNav togglechange={this.changeSiderNav.bind(this)}/>:<WarframeSiderNavHide togglechange={this.changeSiderNav.bind(this)}/>}
              <Layout>
                <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                  <Row>
                      <Col xs={24} sm={24} md={8} lg={8} className="bgcred">
                        <CetusStatus cetusstate={this.state.warframeinfo.cetusCycle}/>
                      </Col>
                      <Col xs={24} sm={24} md={8} lg={8} className="bgcyellow">
                      
                      </Col>
                      <Col xs={24} sm={24} md={8} lg={8}className="bgcred">
                      
                      </Col>
                      
                  </Row>
                </Content>
              </Layout>
            
          </Layout>
        )
    }
}
export default Warframe;



