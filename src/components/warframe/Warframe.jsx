import React, { Component } from 'react'
import axios from 'axios';
import qs from 'qs';
import { Col, Row } from 'antd';
import { setsetWarframeToken, setAuthorizationToken } from '../../utils/setAuthorizationToken';


let clientinfo = qs.stringify({
    client_id: '36d1e6ec377c4b808b232950cf13068b',
    client_secret: 'd85039c14b314fc4aa546eb097e6e754',
    grant_type: 'client_credentials'
})
class Warframe extends Component {
    constructor() {
        super();
        this.state = {
            request_headers:{}
        }
    }
    
    gettoken = (client) => {
        axios.post("https://api.richasy.cn/connect/token",client,{headers:{'Content-Type': 'application/x-www-form-urlencoded'}}).then(
            res => {
                console.log(res.data)
            }

        ).catch(err=>{
            console.log(err)
        })
    }
    
   
    getlatestinfo = (time) => {
        setInterval(

        )
    }
    componentDidMount() {
        
        // this.gettoken(clientinfo)
    }
    render() {
        return (
            <Row>
                <Col></Col>
            </Row>
        )
    }
}
export default Warframe;



