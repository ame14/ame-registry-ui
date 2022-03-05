import React from "react";
import api from "../Api";
class ExtensionList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            extensions: []
        }
        this.instantiate = this.instantiate.bind(this)
    }

    instantiate(id){
        api.post('/instance/create?extension='+id).then((res)=>{
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
                <div class="mb-4" style={{'width':'600px'}}>
                    <div class="row border rounded me-3 ">
                        <div class="col">
                            <div class="row border-bottom bg-light" style={{ 'padding': "30px" }}>
                                <div class="col-8">
                                    <h4> <strong>{e.name}</strong> </h4>
                                </div>
                                <div class="col-4 text-end">
                                    by {e.developerName} <a href="#"> {e.developerEmail} </a>
                                </div> </div>
                            <div class="row" style={{ 'height': '150px' }}>
                                <div class="col p-4">
                                    <p> {e.description} </p>
                                </div>
                            </div>

                            <div class="row border-top p-2">
                                <div class="col border rounded me-3">
                                    <div class="row">
                                        <div class="col-8 bg-light border-end border-dark"><strong> Instances</strong></div>
                                        <div class="col-4"> {e.instanceCount}</div>
                                    </div>
                                </div>
                                <div class="col border rounded me-3">
                                    <div class="row">
                                        <div class="col-8 bg-light border-end border-dark"> <strong> Executions </strong> </div>
                                        <div class="col-4"> {e.executionCount} </div>
                                    </div>
                                </div>
                                <div class="col border border-dark rounded text-center" style={{backgroundColor:"rgb(125 255 125)"}}>
                                   <a class="stretch-link" onClick={()=>this.instantiate(e.id)} href="#" style={{'text-decoration': 'none', 'color': 'black'}}> Instantiate </a>
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