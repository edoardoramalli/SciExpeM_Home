import React from "react";


// import {Drawer, Form, Button, Input, Checkbox, message} from "antd";
import {UserOutlined, LockOutlined} from '@ant-design/icons';


import Cookies from "js-cookie";

const axios = require('axios');

const antd = require('antd');
const {Drawer, Form, Button, Input, Checkbox, message} = antd


const csrftoken = Cookies.get('csrftoken');
axios.defaults.headers.post['X-CSRFToken'] = csrftoken;

class Login extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            visible: this.props.visible
        }
    }

    onClose = () => {
        this.setState({
            visible: false
        })
    };

    onFinish = (values) => {
        const params = {
            username: values.username,
            password: values.password,
        }


        axios.post(window.$API_address + 'login', params)
            .then(res => {
                window.location.href="/UI";
            })
            .catch(error => {
                if (error.response.status === 401){
                    message.error("Incorrect Username or Password.", 3);
                }
                else if (error.response.status === 400){
                    message.error("Bad Request. " + error.response.data, 3);
                }
                else{
                    message.error(error.response.data, 3);
                }
            })
    };

    render() {
        return(
            <Drawer
                title="Log into SciExpeM"
                width={500}
                placement="right"
                closable={true}
                onClose={this.onClose}
                visible={this.state.visible}
            >
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input.Password
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        {/*<a className="login-form-forgot" href="">*/}
                        {/*    Forgot password*/}
                        {/*</a>*/}
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                        {/*Or <a href="">register now!</a>*/}
                    </Form.Item>
                </Form>
            </Drawer>
        )
    }

}

export default Login;