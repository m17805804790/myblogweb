import React, { Component } from 'react';
import { Row, Col, Layout, Menu, Icon, Button } from 'antd';

const {
    Header, Sider, Content,
} = Layout;
const SubMenu = Menu.SubMenu;

export default class Work extends Component {
    constructor() {
        super();
        this.state = {
            whichutils:"",
        }
    }




    render() {
        return (
            <Layout>
                <Sider width={200} style={{ background: '#fff',height:"100vh" }}>
                    <Menu
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        theme="dark"
                    >
                        <SubMenu key="sub1"title="工具列表">
                            <Menu.Item key="1">RGB转16进制</Menu.Item>
                            <Menu.Item key="2">暂无</Menu.Item>
                            <Menu.Item key="3">暂无</Menu.Item>
                            <Menu.Item key="4">暂无</Menu.Item>
                        </SubMenu>
                        
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>

                    <Content style={{
                        background: '#fff',  margin: 0, minHeight: 900,
                    }}
                    >
                        {/*      */}
                    </Content>
                </Layout>
            </Layout>

        )
    }
}