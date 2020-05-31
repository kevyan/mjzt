import * as React from "react"
import { Card } from "antd"

class HomePage extends React.Component<{}, {}> {
    public render(): JSX.Element {
        return (
            <Card bordered title="Home" style={{ margin: "16px 16px"}}>
                <p>TODO: Add profile </p>
            </Card>
        )
    }
}

export default HomePage
