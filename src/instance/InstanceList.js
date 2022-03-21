import React from "react";
import { CodeBlock } from "react-code-blocks";
import Instance from './Instance'
import api from "../Api";
class InstanceList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            instances: []
        }
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

        let instantRows = this.state.instances.map((instance) => {
            return <Instance instance={instance} />;
        })

        return (
            instantRows
        )
    }
}

export default InstanceList;