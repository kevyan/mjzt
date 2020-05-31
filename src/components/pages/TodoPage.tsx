import * as React from "react"
import * as Redux from "redux"
import {connect} from "react-redux"
import { Card, Table, Button, Modal, Input } from "antd"

import { actionCreators } from "@ui/Actions/actions"
import { TodoItem } from "@ui/Models/TodoItem"
import { IState } from "@ui/Store/configStore"

const { Column } = Table

interface ITodoProps {
    todoItems: TodoItem[]
    actions?: any
}

interface ITodoState {
    modalVisible: boolean
    newTaskName: string
}

class TodoPageComponent extends React.Component<ITodoProps, ITodoState> {
    constructor(props: ITodoProps) {
        super(props)
        this.state = {
            modalVisible: false,
            newTaskName: "",
        }
    }

    public render(): JSX.Element {
        return (
            <div>
                <Card bordered title="留言板" style={{ margin: "16px 16px"}}>
                    <Button type="primary" icon="plus"
                        onClick={() => {this.setState({modalVisible: true}); }}>写下你的留言吧</Button>
                    <Table dataSource={this.props.todoItems}>
                        <Column title="序列" dataIndex="id" key="id"></Column>
                        <Column title="留言" dataIndex="name" key="name"></Column>
                        <Column title="喜欢" key="action" render={(text: any, record: TodoItem, index: number) => (
                            <Button type="primary" disabled={record.isCompleted}
                                onClick={() => {
                                    record.isCompleted = true;
                                    this.props.actions.completeTodoAction(record);
                                }}>Like！</Button>
                        )} />
                    </Table>
                </Card>
                <Modal title="新留言" visible={this.state.modalVisible}
                    onOk={() => this.handleOk()}
                    onCancel={() => this.handleCancel()}>
                    <Input.TextArea rows={4}
                        onChange={(e) => {
                            this.setState({newTaskName: e.target.value});
                        }} />
                </Modal>
            </div>
        );
    }
    //TODO: Persist in database 
    private handleOk = () => {
        const item: TodoItem = {
            id: 0,
            key: 0,
            name: this.state.newTaskName,
            isCompleted: false,
        }

        this.props.actions.addTodoAction(item)
        this.setState({modalVisible: false})
    }

    private handleCancel = () => {
        this.setState({modalVisible: false})
    }
}

const mapStateToProps = (state: IState): ITodoProps => {
    return {
        todoItems: state.todos,
    };
};

const mapDispatchToProps = (dispatch: Redux.Dispatch<any>) => {
    return {
        actions: Redux.bindActionCreators(actionCreators, dispatch),
    };
};

export const TodoPage = connect<ITodoProps>(mapStateToProps, mapDispatchToProps)(TodoPageComponent);
