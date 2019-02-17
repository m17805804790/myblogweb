import React, { Component } from 'react'
import axios from 'axios';
// import qs from 'qs';
import { Col, Row, Layout } from 'antd';
import { setsetWarframeToken, setAuthorizationToken } from '../../utils/setAuthorizationToken';
import deepTranslate from '../../utils/translate';
import WarframeSiderNav from './WarframeSiderNav';
import WarframeSiderNavHide from './WarframeSiderNavHide';
import WorldStatus from './WorldStatus';


import ("./Warframe.less");




const { Header, Content, Sider } = Layout;
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
                if (res.data !== this.state.warframeinfo) {
                    this.setState({
                        warframeinfo: deepTranslate(res.data)
                    })
                }
            }
        )

    }
    
    keepupdate = (ms) => {
        setInterval(this.getInfo(), ms)
    }
    //暂时不做优化
    /*api:
    希图斯信息:/cetusStatus     √
    希图斯赏金任务:/ostron
    地球信息:/earthStatus           
    福尔图娜信息:/vallisStatus
    福尔图娜赏金任务:/solaris
    入侵建造进度:/constructionProgress
    新闻:/news
    虚空商人:/voidTrader       √
    Darvo每日特惠:/darvo       
    警报:/alert                 √
    入侵:/invasion
    裂缝:/fissure                   √
    突击:/sortie
    活动/战术警报/突发事件:/event     √
    追随者:/stalker
    Warframe Market 价格查询API:/wfa/basic/{platform}/wm/{query}
    紫卡先放放
    
    
    */



    changeSiderNav=()=>{
        this.setState({
            SiderNavisshow:this.state.SiderNavisshow?false:true
        })
    }
    //用于切换垂直导航栏
    timechange =(time)=>{
        if(time<=86400000){
            time = time/1e3;
            let hour=Math.floor(time/3600);
            let minute=Math.floor((time%3600)/60);
            let second=time%60;
            let realtime=``
        }else{

        }
        return realtime
    }
    addzero=(num)=>{
        if(num<10){
            return `0${num}`
        }else{
            return num
        }
    }
    //将秒转化为时间
    componentDidMount() {
        // this.keepupdate();
    }
    render() {
        return (
            <Layout>
              {this.state.SiderNavisshow?<WarframeSiderNav togglechange={this.changeSiderNav.bind(this)}/>:<WarframeSiderNavHide togglechange={this.changeSiderNav.bind(this)}/>}
              <Layout>
                <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                  <Row>
                      <Col xs={24} sm={24} md={8} lg={8} className="bgcred">
                      
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



