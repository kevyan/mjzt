import * as React from "react"
import { Layout, Menu, Icon } from "antd"
import { Link } from "react-router-dom"

import "./Sidebar.scss"

enum Mode {
    VERTICAL = "vertical",
    INLINE = "inline",
    HORIZONTAL = "horizontal"
}

interface SidebarState {
    collapsed: boolean
    mode: Mode | undefined
}

class Sidebar extends React.Component<{}, SidebarState> {
    constructor(props: {}) {
        super(props)

        this.state = {
            collapsed: false,
            mode: Mode.INLINE,
        }
    }

    public render(): JSX.Element {
        const {collapsed} = this.state

        return (
            <Layout.Sider collapsible collapsed={collapsed} onCollapse={this.toggle}>
                <div className="ant-layout-logo" />

                <Menu theme="dark" mode={this.state.mode} defaultSelectedKeys={["1"]}>
                    <Menu.Item key="1">
                        <Link to="/home">
                            <Icon type="home" />
                            <span className="nav-text">Home</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to="/episodes">
                            <Icon type="file" />
                            <span className="nav-text">Episodes</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/todo">
                            <Icon type="check-square-o" />
                            <span className="nav-text">Leave a message</span>
                        </Link>
                    </Menu.Item>
                </Menu>

                <div className="sider-trigger">

                <Icon
                    className="trigger"
                    type={collapsed ? "menu-unfold" : "menu-fold"}
                    onClick={this.toggle}/>
                </div>
            </Layout.Sider>
        )
    }

    private toggle = () => {
        const {collapsed} = this.state

        this.setState({
            collapsed: !collapsed,
            mode: !collapsed ? Mode.VERTICAL : Mode.INLINE,
        })
    }
}

export default Sidebar
