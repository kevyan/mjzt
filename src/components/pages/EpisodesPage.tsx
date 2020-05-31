import * as React from "react"
import { Card } from "antd"
import ReactAudioPlayer from 'react-audio-player';
import { titles } from '../models/constants'


class EpisodesPage extends React.Component<{}, {}> {
    public render(): JSX.Element {
        return (
            <div style={{backgroundColor: "#423c3c", margin: "40px 40px"}}>
                <Card title={titles.vol15} style={{ backgroundColor: "#e7e7e7"}}>
                    <div>
                    <ReactAudioPlayer
                        src= "https://fdfs.xmcdn.com/group80/M00/BD/4C/wKgPEV7QPciiPF3wAaAWNeWsOj8962.mp3"
                        controls
                        style={{backgroundColor: "#e7e7e7"}}
                    />
                    </div>
                </Card>
            </div>
        )
    }
}

export default EpisodesPage
