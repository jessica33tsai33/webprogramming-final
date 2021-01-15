import React, { useState } from 'react'
import { Form, Input, Select, InputNumber, Switch, Radio, Slider, Button } from 'antd'

const { Option } = Select;
const formItemLayout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 6,
    },
};

const CompanyInfo = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        //存資料到資料庫

    };

    return (
        <Form
            name="company_info"
            {...formItemLayout}
            onFinish={onFinish}>
            <h1>企業資本資料</h1>
            <Form.Item
                label="公司名稱"
                name="CompanyName"
                rules={[
                    {
                        required: true,
                        message: 'Please input your company name!',
                    },
                ]}>
                <Input />
            </Form.Item>

            <Form.Item
                label="統一編號"
                name="CompanyNumber"
                rules={[
                    {
                        required: true,
                        message: 'Please input your company number!',
                    },
                ]}>
                <Input />
            </Form.Item>

            <Form.Item
                label="所屬產業"
                name="Industry"
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Please select your industry!',
                    },
                ]}>
                <Select placeholder="Please select an indusdry">
                    <Option value="food">食品業</Option>
                    <Option value="light">光電業</Option>
                    <Option value="computer">電腦與周邊產業</Option>
                    <Option value="finance">金融業</Option>
                </Select>
            </Form.Item>

            <Form.Item label="年營業額" name="AnnualTurnover" rules={[
                {
                    required: true,
                    message: 'Please enter a number!',
                },]}>
                <InputNumber />
                <span className="ant-form-text">萬元</span>
            </Form.Item>

            <h2>治理 Governance</h2>

            <Form.Item
                label="公司治理評鑑等級"
                name="LevelOfGovernance"
                rules={[
                    {
                        required: true,
                        message: 'Please pick an option!',
                    },
                ]}>
                <Select placeholder="Please select an option">
                    <Option value="0">5%</Option>
                    <Option value="6">6% ~ 20%</Option>
                    <Option value="21">21% ~ 35%</Option>
                    <Option value="36">36% ~ 50%</Option>
                    <Option value="51">51% ~ 65%</Option>
                    <Option value="66">66% ~ 80%</Option>
                    <Option value="81">81% ~ 100%</Option>
                </Select>
            </Form.Item>

            <h2>環境 Environment</h2>

            <Form.Item label="總體用水量" name="AnnualWaterUsage" rules={[
                {
                    required: true,
                    message: 'Please enter a number!',
                },]}>
                <InputNumber />
                <span className="ant-form-text">立方公尺</span>
            </Form.Item>

            <Form.Item label="水資源回收量" name="AnnualWaterReturn" rules={[
                {
                    required: true,
                    message: 'Please enter a number!',
                },]}>
                <InputNumber />
                <span className="ant-form-text">立方公尺</span>
            </Form.Item>

            <Form.Item label="溫室氣體範疇一排放量" name="Scope1" rules={[
                {
                    required: true,
                    message: 'Please enter a number!',
                },]}>
                <InputNumber />
                <span className="ant-form-text">公噸二氧化碳當量</span>
            </Form.Item>

            <Form.Item label="溫室氣體範疇二排放量" name="Scope2" rules={[
                {
                    required: true,
                    message: 'Please enter a number!',
                },]}>
                <InputNumber />
                <span className="ant-form-text">公噸二氧化碳當量</span>
            </Form.Item>

            <Form.Item label="溫室氣體範疇三排放量" name="Scope3" rules={[
                {
                    required: true,
                    message: 'Please enter a number!',
                },]}>
                <InputNumber />
                <span className="ant-form-text">公噸二氧化碳當量</span>
            </Form.Item>

            <Form.Item label="廢棄物總重量" name="Waste" rules={[
                {
                    required: true,
                    message: 'Please enter a number!',
                },]}>
                <InputNumber />
                <span className="ant-form-text">公噸</span>
            </Form.Item>

            <h2>社會 Society</h2>

            <Form.Item name="switch" label="Switch" valuePropName="checked">
                <Switch />
            </Form.Item>

            <Form.Item name="slider" label="Slider">
                <Slider
                    marks={{
                        0: 'A',
                        20: 'B',
                        40: 'C',
                        60: 'D',
                        80: 'E',
                        100: 'F',
                    }}
                />
            </Form.Item>

            <Form.Item name="radio-group" label="Radio.Group">
                <Radio.Group>
                    <Radio value="a">item 1</Radio>
                    <Radio value="b">item 2</Radio>
                    <Radio value="c">item 3</Radio>
                </Radio.Group>
            </Form.Item>

            <Form.Item
                name="radio-button"
                label="Radio.Button"
                rules={[
                    {
                        required: true,
                        message: 'Please pick an item!',
                    },
                ]}
            >
                <Radio.Group>
                    <Radio.Button value="a">item 1</Radio.Button>
                    <Radio.Button value="b">item 2</Radio.Button>
                    <Radio.Button value="c">item 3</Radio.Button>
                </Radio.Group>
            </Form.Item>

            <Form.Item name="Guarantee" label="以上資料是否獲第三方認證" rules={[
                {
                    required: true,
                    message: 'Please pick an item!',
                },
            ]}>
                <Radio.Group>
                    <Radio value="yes">是</Radio>
                    <Radio value="no">否</Radio>
                </Radio.Group>
            </Form.Item>

            <Form.Item
                label="第三方認證單位"
                name="GuaranteeAgency"
                rules={[
                    {
                        required: true,
                        message: 'Please pick an option!',
                    },
                ]}>
                <Select placeholder="Please select an option">
                    <Option value="NA">無，未接受第三方認證</Option>
                    <Option value="EY">安永聯合會計師事務所 (EY)</Option>
                    <Option value="Deloitte">勤業眾信聯合會計師事務所 (Deloitte)</Option>
                    <Option value="KPMG">安侯建業聯合會計師事務所 (KPMG)</Option>
                    <Option value="PwC">資誠聯合會計師事務所 (PwC)</Option>
                </Select>
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    span: 12,
                    offset: 6,
                }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default CompanyInfo