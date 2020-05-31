import * as React from "react";

import { HashRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { ConfigProvider } from "antd"
import enUS from "antd/lib/locale-provider/en_US"

import {route} from "@ui/App/routes"
import { configureStore, initStore } from "@ui/Store/configStore"

const store = configureStore()
store.dispatch<any>(initStore())

class App extends React.Component<{}, {}> {
    public render(): JSX.Element {
        return (
            <ConfigProvider locale={enUS}>
                <Provider store={store}>
                    <HashRouter children={route} />
                </Provider>
            </ConfigProvider>
        )
    }
}

export default App;
