import * as React from "react"
import { Layout, Row, Col, Menu, Icon } from "antd"
import { Link } from "react-router-dom"

import "./Header.scss"

const LayoutHeader = Layout.Header
const SubMenu = Menu.SubMenu
const MenuItem = Menu.Item

const SubMenuIcon = (
    <span>
        {'Demo User'} <Icon type="user" />
    </span>
)

export const Header: React.StatelessComponent<{}> = () => {
    return (
        <LayoutHeader style={{ background: "#fff", padding: 0 }}>
            <Row type="flex" justify="end" align="middle">
                <Col span={3}>
                    <Menu mode="horizontal" className="user-logout">
                        <SubMenu title={SubMenuIcon} >
                            <MenuItem key="profile">
                                <Link to="#" >Profile</Link>
                            </MenuItem>

                            <MenuItem key="logOut">
                                <Link to="#" >Logout</Link>
                            </MenuItem>
                        </SubMenu>
                    </Menu>
                </Col>
            </Row>
        </LayoutHeader>
    )
}
