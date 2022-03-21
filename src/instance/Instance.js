import React from "react";
import api from "../Api";
import { CodeBlock } from "react-code-blocks";


class Instance extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            instance: this.props.instance,
            collapse: true,
            editName: false,
            CopyLink: null
        }

        this.createCopy = this.createCopy.bind(this)
        this.updateInstanceName = this.updateInstanceName.bind(this)
    }

    createCopy(e) {

        const copy = {
            description: e.target["description"].value,
            instanceId: this.state.instance.id
        }

        api.post("/instance/create/copy", copy).then(() => { window.location.reload() });
    }

    renderStatus(s) {
        if (s == 'OPEN') {
            return <span class="text-success"> {s} </span>;
        } else if (s == 'PAUSE') {
            return <span class="text-warning"> {s} </span>;
        } else if (s == 'BROKEN' || s == 'DELETE') {
            return <span class="text-danger"> {s} </span>;
        }
    }

    renderManageStatus() {
        let options = ["OPEN", "PAUSE", "DELETE"];

        options = options.map((e) => {
            let bclass;
            if (e == this.state.instance.state) {
                bclass = "disabled"
            }
            return <div class="p-2 ps-3 pe-3 border me-2"  >  <a class={"btn text-decoration-none text-dark " + bclass} onClick={() => this.updateInstanceState(e)} href=""> {e} </a></div>
        })

        return (<>{options}</>);

    }

    formatDate(d) {
        return (new Date(d * 1000).toTimeString().substring(0, 5) + " " + new Date(d * 1000).toDateString().substring(0, 10))
    }

    renderCopies() {
        return this.state.instance.copies.map((e, i) => {
            let lastExecuted = "Never executed";
            if (e.executions.length > 0) {
                lastExecuted = this.formatDate(e.executions[0]);
            }

            return (<><tr>
                <td>{i + 1}</td>
                <td>{e.description}</td>
                <td>{lastExecuted}</td>
                <td>{e.executions.length}</td>
                <td>{this.formatDate(e.creationDate)}</td>
                <td><button class="btn border w-100 "> Delete </button></td> {/*TODO*/}
            </tr>
                <tr>
                    <td colspan="7">  <CodeBlock
                        text={"<iframe width='100%' height='100%W' src='http://localhost:8080/instance/run/" + e.id + "'> </iframe>"}
                        language="java"
                        theme={"obsidian"}
                        showLineNumbers={false}
                    /> </td>
                </tr>

            </>

            );
        })
    }

    updateInstanceState(s) {
        api.post('instance/state/set?id=' + parseInt(this.state.instance.id) + "&state=" + s).then(() => { window.location = "/" });
    }

    updateInstanceName(e) {
        let name = e.target['instanceName'].value;
        let instanceId = this.state.instance.id;
        api.post('instance/update', { instanceName: name, id: instanceId }).then(() => { window.location.reload() });
    }

    render() {
        let manageDiv;
        let collapseLabel = "Expand"
        if (!this.state.collapse) {
            collapseLabel = 'Collapse';
            manageDiv = <>
                <div class="row mt-4">
                    <div class="col"> <h5> Manage  Instance </h5> </div>
                </div>
                <div class="row">
                    <div class="col text-muted"> Changes made here cascade to all copies. </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="d-flex justify-content-start mt-2 flex-wrap">
                            {this.renderManageStatus()}
                            <div class="border me-2"></div>

                            <div class="p-2 ps-3 pe-3 border me-2">  <a class="btn text-decoration-none text-dark" href={this.state.instance.additional.links.EDIT}> EDITOR </a></div>
                            <div class="p-2 ps-3 pe-3 border me-2">  <a class="btn text-decoration-none text-dark" href={this.state.instance.extensionLink}>    {this.state.instance.extensionName} </a></div>
                            <div class="p-2 ps-3 pe-3 border me-2"> <a class="btn text-decoration-none text-dark" href={this.state.instance.additional.links.WEBSITE}> WEBSITE </a> </div> {/* TODO */}
                        </div>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col"> <h5> Instance Key </h5> </div>
                </div>

                <div class="row">
                    <div class="col text-muted"> This key can be used to access and edit data for this instance. It is often required by third party editors. </div>
                </div>
                <div class="row mt-3">
                    <div class="col bg-light p-2"> {this.state.instance.key} </div>
                </div>
                <div class="row mt-4">
                    <div class="col"> <h5> Copies </h5> </div>
                </div>
                <div class="row">
                    <div class="col text-muted">Create a copy and post it's link your document. Try to keep it one copy per document to make it easier to manage. </div>
                </div>
                <form onSubmit={this.createCopy}>
                    <div class="row mt-3">
                        <div class="col-8"> <input id="description" placeholder="Name for this copy" required class="form-control" type="text" /> </div>
                        <div class="col-4"> <input required class="form-control" type="submit" value="Create Copy" /> </div>
                    </div>
                </form>
                <div class="row mt-3">
                    <div class="col">
                        <table class="table">
                            <thead class="text-muted">
                                <tr> <th> # </th>
                                    <th> Name </th>
                                    <th> Last executed </th>
                                    <th> Execution Count </th>
                                    <th> Created on </th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderCopies()}
                            </tbody>
                        </table>
                    </div>
                </div> </>
        }

        let nameContainer = <h4> {this.state.instance.instanceName}  </h4>;
        let editNameLabel = "Edit Name"
        if (this.state.editName) {
            editNameLabel = "Cancel Edit"
            nameContainer = <form onSubmit={this.updateInstanceName}>
                <div class="row mt-3 mb-3">
                    <div class="col-8"> <input id="instanceName" placeholder={this.state.instance.instanceName} required class="form-control" type="text" /> </div>
                    <div class="col-2"> <input required class="form-control" type="submit" value="Save" /> </div>
                </div>
                <br></br>
            </form>
        }

        return (<div class="me-5 ms-5 p-4">
            <div class="container border p-4 pb-3">
                <div class="row">
                    <div class="col-8">
                        {nameContainer}
                    </div>
                    <div class="col text-end">
                        <button onClick={() => { this.setState({ editName: !this.state.editName }) }} class="btn text-dark text-muted text-decoration-underline">{editNameLabel}</button>
                        <button onClick={() => { this.setState({ collapse: !this.state.collapse }) }} class="btn text-dark text-muted text-decoration-underline">{collapseLabel}</button>
                    </div>
                </div>
                <div class="row">
                    <div class="col text-muted"> this is information about this specific instance. It can later be edited. </div>
                </div>
                <div class="row mt-2">
                    <div class="col">
                        <div class="d-flex justify-content-start mt-2 flex-wrap">
                            <div class="p-2 ps-3 pe-3 border me-2" > Created One: {this.formatDate(this.state.instance.createDate)}</div>
                            <div class="p-2 ps-3 pe-3 border me-2"> Status : {this.renderStatus(this.state.instance.state)} </div>
                            <div class="p-2 ps-3 pe-3 border me-2"> Number of Copies : {this.state.instance.copies.length} </div>
                            <div class="p-2 ps-3 pe-3 border me-2"> Number of Executions : {this.state.instance.executionCount}  </div>
                        </div>
                    </div>
                </div>

                {manageDiv}
            </div>
        </div>)
    }
}

export default Instance;