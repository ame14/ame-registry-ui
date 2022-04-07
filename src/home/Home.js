import React from 'react';
import {
    Justify,
    Envelope
} from "react-bootstrap-icons";

import "./Home.css"
import graph from './images/line-graph-1-what-is.png';
import Plot from 'react-plotly.js';


class Home extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <div class="container">

                <div class="row bg-light border-bottom  p-5">
                    <div class="col-sm-3"></div>
                    <div class="col-sm-6 text-center">
                        <h1 style={{ 'font-family': 'Zen Kaku Gothic Antique, sans-serif;', "font-size": "60" }}>
                            <strong> ADVANCED MARKDOWN EXTENSIONS </strong>
                        </h1>
                        <hr />
                        <div> Lets you add sophisticated objects to your documents without losing the syntactical simplicity and version control capabilities. You can also create your own extensions and register it for others to use.</div>
                    </div>
                    <div class="col-sm-3"></div>
                </div>

                <div class="d-flex justify-content-center md-doc m-5">

                    <div class="border rounded me-5" style={{ 'max-width': '700px' }}>
                        <div class="row border-bottom p-2">
                            <div class="col">
                                <Justify size={20} /> <strong> README.md </strong>
                            </div>
                            <div class="col text-end">
                                <span class="mt-2 mb-2 border bg-light pe-2 ps-2 rounded">
                                    vanilla markdown
                                </span>
                            </div>
                        </div>
                        <div class="row mt-2 p-2 d-flex">
                            <h4> Lunar Vim </h4>
                        </div>

                        <div class="row m-1">
                            <hr></hr>
                        </div>
                        <div class="row p-2">
                            <p class="text-start">LunarVim is an opinionated, extensible, and fast IDE layer for Neovim 0.5.0. LunarVim takes advantage of the latest Neovim features such as Treesitter and Language Server Protocol support.</p>
                        </div>
                        <div class="row ps-2">
                            <h5> Contributors </h5>
                        </div>
                        <div class="row ps-2 pe-2">
                            <hr></hr>
                        </div>
                        <div class="row ps-5">
                            <ol>
                                <li>
                                    <a href="/"> <strong>Abouzar Parvan</strong></a>
                                </li>
                                <li>
                                    <a href="/"> <strong>kylo252</strong></a>
                                </li>
                                <li>
                                    <a href="/"> <strong>rebuilt</strong></a>
                                </li>
                                <li>
                                    <a href="/"> <strong>Christian Chiarulli</strong></a>
                                </li>
                            </ol>


                        </div>

                        <div class="row ps-2">
                            <h5 class="mb-2"> Commit Frequency </h5>
                            <img src={graph} class="img-fluid w-50 m-4" ></img>
                        </div>
                        <div class="row ps-2 mt-2">
                            <h5> Installation </h5>
                        </div>
                        <div class="row ps-2 pe-2">
                            <hr></hr>
                        </div>
                        <div class="row p-1">
                            <div class="col">
                                <ol>
                                    <li>
                                        <strong> Pre-installing </strong>
                                        <ul>
                                            <li>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. M dui vestibulum sapien, feugiat dignissim risus urna eu arcu. Proin in aliquam magna. Donec convallis egestas molestie. Donec pulvinar ex mi, vitae luctus quam </p>
                                            </li>
                                            <li>
                                                <p>commodo non. Ut ex ipsum, laoreet ut accumsan at, semper at Quisque in dapibus leo. Proin vulputate ante ut nulla accumsan pellentesque. Nulla vitae vestibulum purus. Curabitur eu est </p>
                                            </li>
                                            <li>
                                                <p>Sed elementum, nunc et suscipit tincidunt, lectus justo imperdiet enim, a varius magna dui consequat dui. Sed vel condimentum ipsum. Morbi a malesuada sem. Etiam diam massa, consequat ut fringilla vel, lobortis a risus. Nulla posuere volutpat rutrum. Suspendisse potenti. </p>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <strong> Install In One Command!</strong>
                                        <p> Enter :LspInstall followed by TAB to see your options for LSP <br /> Enter :TSInstall followed by TAB to see your options for syntax highlighting</p>
                                        <p class="p-1 bg-light p-2">bash &lt; curl -s https://raw.githubusercontent.com/lunarvim/lunarvim/master/utils </p>
                                    </li>
                                    <li>
                                        <strong> Post-installing </strong>
                                        <ul>
                                            <li>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim, quam sed pulvinar posuere, eros dui vestibulum </p>
                                            </li>
                                            <li>
                                                <p>commodo non. Ut ex ipsum, laoreet ut accumsan at, semper at enim. Suspendisse potenti. Aenean gravida lectus mauris, sed leo. Proin vulputate ante ut nulla accumsan pellentesque. Nulla vitae vestibulum purus. Curabitur eu est </p>
                                            </li>
                                            <li>
                                                <p>Sed elementum, nunc et suscipit tincidunt, lectus justo imperdiet enim, a varius magna dui consequat dui. Sed vel condim fringilla vel, lobortis a risus. Nulla posuere volutpat rutrum. Suspendisse potenti. </p>
                                            </li>
                                        </ul>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>


                    <div class="border rounded" style={{ 'max-width': '700px' }}>
                        <div class="row border-bottom p-2">
                            <div class="col">
                                <Justify size={20} /> <strong> README.md </strong>
                            </div>
                            <div class="col text-end">
                                <span class="mt-2 mb-2 border bg-light pe-2 ps-2 rounded">
                                    Extended markdown
                                </span>
                            </div>
                        </div>
                        <div class="row text-light" id="titleContainer">
                            <div class="col m-2 p-2 border">
                                <div class="row mb-2">
                                    <div id="projectTitle" class=" text-center">
                                        Lunar Vim
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col border p-1 m-2 ms-4 text-center link"> Website </div>
                                    <div class="col border p-1 m-2 text-center link"> Discord </div>
                                    <div class="col border p-1 m-2 text-center link"> Wiki </div>
                                    <div class="col border p-1 m-2 me-4 text-center link"> Docs </div>
                                </div>
                            </div>
                        </div>

                        <div class="row  m-3 p-2 border rounded bg-light">
                            commodo non. Ut ex ipsum, laoreet ut accumsan at, semper at Quisque in dapibus leo. Proin vulputate ante ut nulla accumsan pellentesque. Nulla vitae vestibulum purus. Curabitur eu estcommodo non. Ut ex ipsum, laoreet ut accumsan at, semper at Quisque in dapibus leo. Proin vulputate ante ut nulla accumsan pellentesque. Nulla vitae vestibulum purus. Curabitur eu est
                        </div>
                        <div class="row ps-2 mt-3">
                            <h5> Contributors </h5>
                        </div>
                        <div class="row ps-2 pe-2">
                            <hr></hr>
                        </div>
                        <div class="row m-2">
                            <div class="col border m-4 ">
                                <div class="row border-bottom bg-light ">  <strong>Project Founder </strong></div>
                                <div id="contributor-dave" class="row contributor-picture"> </div>
                                <div class="row  border-top p-1"> <div class="col-8"> Dave Edwards</div><div class="col-4"> <a href="/">  @kylo252 </a> </div>  </div>
                            </div>
                            <div class="col border m-4  ">
                                <div class="row border-bottom bg-light"> <strong> Maintainer </strong></div>
                                <div id="contributor-john" class="row contributor-picture"> </div>
                                <div class="row  border-top p-1"> <div class="col-7"> John Smith</div><div class="col-5"> <a href="/">  @Jhnsmith </a> </div>  </div>
                            </div>
                        </div>
                        <div class="row border m-4">
                            <div class="col-3 border-end bg-light pt-2 pb-2"> <strong>Maintenance</strong>  </div>
                            <div class="col-4 pt-2 pb-2"> Chris Long  </div>
                            <div class="col-5 pt-2 pb-2  text-end"> <a href="/">  <Envelope /> </a></div>
                        </div>
                        <div class="row border m-4">
                            <div class="col-3 border-end bg-light pt-2 pb-2"> <strong>Documentation</strong>  </div>
                            <div class="col-4 pt-2 pb-2"> Sonia Hosee   </div>
                            <div class="col-5 pt-2 pb-2  text-end"> <a href="/">  <Envelope /> </a></div>
                        </div>
                        <div class="row border m-4">
                            <div class="col-3 border-end bg-light pt-2 pb-2"> <strong>Security</strong>  </div>
                            <div class="col-4 pt-2 pb-2"> Maxima Alexandra  </div>
                            <div class="col-5 pt-2 pb-2  text-end"> <a href="/">  <Envelope /> </a></div>
                        </div>
                        <div class="row ps-2 mt-3">
                            <h5> Commit Frequency </h5>
                        </div>
                        <div class="row ps-2 pe-2">
                            <hr></hr>
                        </div>
                        <div class="row">
                            <Plot
                                data={[{
                                    type: 'scatter',
                                    x: [1, 2, 3, 4, 5, 6, 7, 8],
                                    y: [1, 1.5, 2, 3, 1.5, 3, 5, 4, 2],
                                    mode: 'markers+lines',
                                    name: 'Frequency',
                                    line: {
                                        color: 'rgb(56, 55, 0)',
                                        width: 2
                                    }
                                }]}
                                layout={{
                                    margin: { l: 50, r: 50, b: 40, t: 40, pad: 4 },
                                    width: 580, height: 300,
                                    xaxis: { title: "Month" },
                                    yaxis: { title: "Total commits" }
                                }}
                            />
                        </div>
                        <div class="row ps-2 mt-3">
                            <h5> Installation </h5>
                        </div>
                        <div class="row ps-2 pe-2">
                            <hr></hr>
                        </div>
                        <div class="row mb-2">
                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Pre-installing
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <ul>
                                                <li>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. M dui vestibulum sapien, feugiat dignissim risus urna eu arcu. Proin in aliquam magna. Donec convallis egestas molestie. Donec pulvinar ex mi, vitae luctus quam </p>
                                                </li>
                                                <li>
                                                    <p>commodo non. Ut ex ipsum, laoreet ut accumsan at, semper at Quisque in dapibus leo. Proin vulputate ante ut nulla accumsan pellentesque. Nulla vitae vestibulum purus. Curabitur eu est </p>
                                                </li>
                                                <li>
                                                    <p>Sed elementum, nunc et suscipit tincidunt, lectus justo imperdiet enim, a varius magna dui consequat dui. Sed vel condimentum ipsum. Morbi a malesuada sem. Etiam diam massa, consequat ut fringilla vel, lobortis a risus. Nulla posuere volutpat rutrum. Suspendisse potenti. </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Install In One Command!
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. M dui vestibulum sapien, feugiat dignissim risus urna eu arcu. Proin in aliquam magna. Donec convallis egestas molestie. Donec pulvinar ex mi, vitae luctus quam

                                            commodo non. Ut ex ipsum, laoreet ut accumsan at, semper at Quisque in dapibus leo. Proin vulputate ante ut nulla accumsan pellentesque. Nulla vitae vestibulum purus. Curabitur eu est

                                            Sed elementum, nunc et suscipit tincidunt, lectus justo imperdiet enim, a varius magna dui consequat dui. Sed vel condimentum ipsum. Morbi a malesuada sem. Etiam diam massa, consequat ut fringilla vel, lobortis a risus. Nulla posuere volutpat rutrum. Suspendisse potenti.

                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Post-installing
                                        </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <ul>
                                                <li>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim, quam sed pulvinar posuere, eros dui vestibulum </p>
                                                </li>
                                                <li>
                                                    <p>commodo non. Ut ex ipsum, laoreet ut accumsan at, semper at enim. Suspendisse potenti. Aenean gravida lectus mauris, sed leo. Proin vulputate ante ut nulla accumsan pellentesque. Nulla vitae vestibulum purus. Curabitur eu est </p>
                                                </li>
                                                <li>
                                                    <p>Sed elementum, nunc et suscipit tincidunt, lectus justo imperdiet enim, a varius magna dui consequat dui. Sed vel condim fringilla vel, lobortis a risus. Nulla posuere volutpat rutrum. Suspendisse potenti. </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }

}

export default Home