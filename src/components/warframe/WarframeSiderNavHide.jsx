import React from 'react';
import { Menu, Icon, Tooltip,Layout } from 'antd';
const {Sider} = Layout;
import ("./WarframeSiderNavHide.less")
const WarframeSiderNavHide = (props) => {
    return (
        <Sider onClick={props.togglechange}width={10} className="warframe-SiderHide">
            <Menu
                style={{ borderRight: "1px solid grey", width: "10px", minHeight: "890px",height:"100%" }}
                mode="inline"

            >
                <Menu.Item key="1" style={{marginLeft:"-26px",marginTop:"445px" }}><Tooltip title="显示菜单" placement="right"><Icon type="caret-right"  /></Tooltip></Menu.Item>
            </Menu>
        </Sider>
    )
}
export default WarframeSiderNavHide;
