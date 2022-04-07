import React from "react";
import api from "../Api";
class RegisterExtension extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            extension: {}
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        // {
        //     "name":"Js-extension-2",
        //     "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis tort uctus nisl aliquet. Quisque et tellus ma.",
        //     "links": {"EDIT":"http://localhost:3001/edit", "EXECUTE":"http://localhost:3002/execute","WEBSITE":"http://localhost:3001"},
        //     "initialData":"function App() { \n  return (<div><h3>Js-markdown-extension</h3><hr/><p>Here is your new component. Write and save</p></div>); \n} \n ReactDOM.render(<App />, _mount_);"
        // }

        let editLink =  e.target['editLink'].value;
        if (!editLink) {
            editLink = "/no-edit"
        }
        let extension = {
            "name": e.target['name'].value,
            "description": e.target['description'].value,
            "links": { "EDIT":editLink, "EXECUTE": e.target['executeLink'].value, "WEBSITE": e.target['websiteLink'].value },
            "initialData":  e.target['initialData'].value
        }

        api.post("/extension/register",extension).then((e)=>{
            alert("Your extension has been registered");
            window.location = "/"
        });
    }
    render() {
        return <div class="container m-5 p-5">
            <h2>Register Extension</h2>
            <form class="w-50 mt-5" onSubmit={this.handleSubmit}>
                <h5> General </h5>
                <hr></hr>
                <div class="mb-3 mt-4">
                    <label class="form-label">Name*</label>
                    <input type="text" required class="form-control" id="name" />
                    <div class="form-text">This is the name that will be used when presenting your extension.</div>
                </div>
                <div class="mb-3">
                    <label  class="form-label">Description*</label>
                    <input type="textarea" id="description" required class="form-control" />
                    <div class="form-text">Provide a short description of your extension</div>
                </div>
                <h5> links </h5>
                <hr></hr>
                <div class="mb-3 mt-4">
                    <label class="form-label">Edit Link</label>
                    <input type="text" id="editLink" class="form-control" />
                    <div class="form-text">What link will users click to edit their extensions instance?</div>
                </div>
                <div class="mb-3">
                    <label class="form-label">Execute Link*</label>
                    <input type="text" id="executeLink" required class="form-control" />
                    <div class="form-text">Which link will be executed when a copy of an instance is viewed.</div>
                </div>
                <div class="mb-3">
                    <label class="form-label">Website</label>
                    <input type="text" id="websiteLink" class="form-control" />
                    <div class="form-text">Where can users visit to view more information about this extension.</div>
                </div>
                <h5> Other </h5>
                <hr></hr>
                <div class="mb-3 mt-4">
                    <label class="form-label">Initial Data</label>
                    <textarea type="textarea" row="8" id="initialData" class="form-control" />
                    <div class="form-text">The default data for a new instance of this extension.</div>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>;
    }
}

export default RegisterExtension;
