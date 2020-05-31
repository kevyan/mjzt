import * as React from "react"
import { Layout } from "antd"
import { Redirect } from "react-router-dom"
import { renderRoutes } from "react-router-config"

import Sidebar from "@ui/Layouts/Sidebar"
import { Header } from "@ui/Layouts/Header"
import { routes } from "@ui/App/routes"

import "./PageLayout.scss"

const PageLayout: React.StatelessComponent<{}> = () => {
    return (
        <Layout className="ant-layout-has-sider">
            <Sidebar />

            <Layout>
                <Layout.Content>
                    <Header />
                    <Redirect to="/home" />
                    {
                        renderRoutes(routes)
                    }
                </Layout.Content>
            </Layout>
        </Layout>
    )
}

export default PageLayout
