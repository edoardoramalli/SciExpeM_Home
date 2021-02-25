import React, { lazy, Suspense } from 'react';

import './App.css';




// import {BackTop, Layout, Col, Spin} from "antd";
import NavBar from "./NavBar";

const antd = require('antd');
const {BackTop, Layout, Col, Spin} = antd

const {Header, Content, Footer} = Layout;

const Home = lazy(() => import('./Pages/Home/Home'));


class App extends React.Component {

    constructor(props) {
        super(props);
        this.updateStateApp = this.updateStateApp.bind(this)
        this.state = {
            current: 'home'
        }
    }

    updateStateApp(e) {
        this.setState({
            current: e.key
        })
    }


    render() {

        const current = this.state.current;
        const currentMapping = {
            'home': <Home/>,
            // 'login': <Login/>
            // "experiments": <ExperimentTable/>,
            // "searchandexecute": <SearchAndExecute/>,
            // "input": <InsertExperimentFile/>,
            // "input-form": <InsertExperimentForm/>,
            // "about": <div>Ciaooo</div>
        }

        return (
            <Layout className="layout">
                <Header>
                    <NavBar updateStateApp = {this.updateStateApp} current={this.state.current}/>
                </Header>
                <Content style={{padding: '25px 25px', height: "100%"}}>
                    <Col span={24} style={{height: '75vh'}}>
                        <div style={{background: '#fff', padding: 0, height: "100%"}}>
                            <Suspense fallback={<div><Spin tip="Loading..." size="large" /></div>}>
                                {currentMapping[current]}
                            </Suspense>
                        </div>
                    </Col>

                    <BackTop>
                        <div
                            style={{  height: 40,
                                width: 40,
                                lineHeight: '40px',
                                borderRadius: 4,
                                backgroundColor: '#1088e9',
                                color: '#fff',
                                textAlign: 'center',
                                fontSize: 14,}}
                        >
                            UP
                        </div>
                    </BackTop>

                </Content>
                <Footer style={{textAlign: 'center', float: 'bottom', padding: '25px'}}>
                    © Politecnico di Milano
                </Footer>
            </Layout>)
    }

}

export default App;