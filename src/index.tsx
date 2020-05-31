import * as React from "react"
import * as ReactDOM from "react-dom"
import App from "@ui/App/Main"


const render = (RootComponent: any) => {
    ReactDOM.render(
        <RootComponent />, document.getElementById("app"),
    )
}

render(App)

// Hot Module Replacement
declare let module: {
    hot: any
}

if (module.hot) {
  module.hot.accept("@ui/App/Main", () => {
    const NewApp = require("@ui/App/Main").default;

    render(NewApp)
  })
}
