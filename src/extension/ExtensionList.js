import React from "react";
import api from "../Api";
class ExtensionList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            extensions: []
        }
    }

    instantiate(id) {
        api.post('/instance/create?extension=' + id).then((res) => {
            window.location = '/instances'
        })
    }

    componentDidMount() {
        api.get('extension/all').then((res) => { this.setState({ extensions: res.data }) });
    }


    render() {
        if (this.state.extensions.length == 0) {
            return <h3 class="p-5 m-5"> Loading... </h3>
        }

        let extensionList = this.state.extensions.map((e) => {
            return (
                <div class="mb-4" style={{ 'width': '600px' }}>
                    <div class="row border rounded me-3 ">
                        <div class="col">
                            <div class="row border-bottom bg-light" style={{ 'padding': "30px" }}>
                                <div class="col-7">
                                    <h4> <strong>{e.name}</strong> </h4>
                                </div>
                                <div class="col-5 text-end text-muted">
                                    by {e.additional.developerEmail}
                                </div> </div>
                            <div class="row" style={{ 'height': '150px' }}>
                                <div class="col p-4">
                                    <p> {e.description} </p>
                                </div>
                            </div>

                            <div class="row mb-2">
                                <div class="col">
                                    <div class="d-flex justify-content-between mt-2 flex-wrap">
                                        <div class="p-2 ps-3 pe-3 border me-2" > Executions: {e.additional.executionCount}</div>
                                        <div class="p-2 ps-3 pe-3 border me-2"> Instances : {e.additional.instanceCount}</div>
                                        <button class="btn btn-primary p-2 ps-3 pe-3 border me-2">  View More </button>
                                        <button class="btn btn-primary p-2 ps-3 pe-3 border me-2" onClick={() => this.instantiate(e.id)}>  Create Instance </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })

        return (<div class="container-fluid">
            <div class="d-flex flex-wrap justify-content-between row m-5">
                {extensionList}
            </div>
        </div>

        )
    }
}

export default ExtensionList;