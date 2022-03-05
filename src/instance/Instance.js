import React from "react";
import { CodeBlock } from "react-code-blocks";

import api from "../Api";
class Instance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            instances: []
        }

        this.optionClick = this.optionClick.bind(this);
    }

    optionClick(instance, button) {
        if (button == 'DELETED' || button == 'PAUSED' || button == 'OPEN') {
            api.post('/instance/state/set?id=' + instance.id + '&state=' + button).then((res) => {
                // refresh
                window.location = '/instances'
            })
        }

        // TODO
        // for the WEBSITE, redirect the user to the extension if one has been provided
        // for edit, take the user to the edit page

    }

    componentDidMount() {
        api.get('/instance/').then((res) => {
            this.setState({ instances: res.data });
        });
    }

    render() {

        if (this.state.instances.length == 0) {
            return <h2 class="m-5 p-5"> Loading... </h2>
        }

        let instantRows = this.state.instances.map((e) => {
            return (
                <>
                    <tr class="bg-light">
                        <td> Key </td>
                        <td colspan="6">{e.key}</td>
                    </tr>
                    <tr>
                        <th scope="row">{e.id}</th>
                        <td>{e.extensionName}</td>
                        <td>{new Date(e.createDate * 1000).toTimeString().substring(0,5) + " " + new Date(e.createDate * 1000).toDateString().substring(0,10)}</td>

                        <td>
                            <div style={{ 'font-size': '13px' }}>
                                <CodeBlock
                                    text={e.executionLink}
                                    language="java"
                                    theme="atomOneDark"
                                    showLineNumbers="false"
                                /></div>
                        </td>
                        <td>{e.executeCounter}</td>
                        <td><i> {e.state} </i></td>
                        <td>
                            <div class="d-flex justify-content-evenly">
                                <button onClick={() => this.optionClick(e, 'EDIT')} class="btn btn-light border"> EDIT </button> <button class="btn btn-light border" onClick={() => this.optionClick(e, 'WEBSITE')} > WEBSITE </button> <button class="btn btn-success" onClick={() => this.optionClick(e, 'OPEN')}> OPEN </button>  <button class="btn btn-warning" onClick={() => this.optionClick(e, 'PAUSED')}> PAUSE </button> <button class="btn btn-danger" onClick={() => this.optionClick(e, 'DELETED')} > DELETE </button>
                            </div> </td>
                    </tr>
                </>
            )
        })
        return (
            <div class="col m-5 p-5">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Extension Name</th>
                            <th scope="col">Date Created</th>
                            <th scope="col">Link</th>
                            <th scope="col">Executions</th>
                            <th scope="col">State</th>
                            <th scope="col">Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {instantRows}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Instance;