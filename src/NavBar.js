import React, {lazy} from "react";


// import {Menu, message} from "antd";
import {HomeOutlined, FundProjectionScreenOutlined, LoginOutlined, FileTextOutlined} from '@ant-design/icons';

import Login from './Pages/Login/Login';

const antd = require('antd');
const {Menu, message} = antd

const axios = require('axios');

class NavBar extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            username: 'user.name',
            login: null,
            authenticated: false,
        }
    }

    handleMenuClick = (e) => {
        if (e.key === 'login'){
            if (this.state.authenticated === true){
                window.location.href="/UI";
            }
            else{
                this.setState({login: <Login visible={true}/>})
            }

        }else{
            this.props.updateStateApp(e);
        }

    };

    componentDidMount() {
        axios.get(window.$API_address + 'testAuthentication')
            .then(res => {
                this.setState({authenticated: true})
            }).catch(err =>{
                this.setState({authenticated: false})
        })
    }


    render() {
        return(
            <>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={[this.props.current]}
                onClick={this.handleMenuClick}
                style={{lineHeight: '64px'}}
            >
                <Menu.Item key="home"><HomeOutlined />Home</Menu.Item>
                <Menu.Item key="project"><FundProjectionScreenOutlined />Project</Menu.Item>
                <Menu.Item key="results"><FileTextOutlined />Results</Menu.Item>
                <Menu.Item key="login" style={{"float": "right"}}>
                    <LoginOutlined />
                    Enter in SciExpeM
                </Menu.Item>
                {this.state.login}
            </Menu>
        </>
        )
    }
}

export default NavBar;