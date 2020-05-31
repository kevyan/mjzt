import * as React from "react"
import { RouteConfig } from "react-router-config"
import { Route, Switch } from "react-router-dom"

import HomePage from "@ui/Pages/HomePage"
import { TodoPage } from "@ui/Pages/TodoPage"
import EpisodesPage from "@ui/Pages/EpisodesPage"
import PageLayout from "@ui/Layouts/PageLayout"

export const routes: RouteConfig[] = [
    {
        path: "/home",
        exact: true,
        component: () => (<HomePage />),
    },
    {
        path: "/todo",
        component: () => (<TodoPage />),
    },
    {
        path: "/episodes",
        component: () => (<EpisodesPage />),
    },
]

export const route = (
    <Switch>
        <Route path="/" component={PageLayout} />
    </Switch>
)
