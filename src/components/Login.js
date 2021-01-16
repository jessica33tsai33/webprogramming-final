import React, { useState } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';

//form style
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const Login = (props) => {

    const [errormsg, setErrormsg] = useState(false);

    const onFinish = (values) => {
        console.log('Success:', values);
        if (values.username === "ric" && values.password === "webprogramming") {
            props.setLogin(true)
            setErrormsg(false)
        }
        else {
            props.setLogin(false)
            setErrormsg(true)
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form {...layout} name="basic" onFinish={onFinish} onFinishFailed={onFinishFailed}>
            <Form.Item
                label="Username"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}>
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}>
                <Input.Password />
            </Form.Item>

            {(errormsg === true)
                ? (<div style={{ color: 'red' }}>*You entered a wrong login information, please try again...</div>)
                : (<div></div>)}

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default Login