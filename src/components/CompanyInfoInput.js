import './CompanyInfoInput.css'
import React, { useState } from 'react'
import { Form, Input, Select, InputNumber, Radio, Button, Divider, Layout, Menu } from 'antd'
import useCompanyInfo from '../useCompanyInfo'

const { Header, Footer, Sider, Content } = Layout;
const { Option } = Select;

const formItemLayout = {
    labelCol: {
        span: 10,
    },
    wrapperCol: {
        span: 6,
    },
};

const CompanyInfoInput = (props) => {

    const { status, info, sendInfo } = useCompanyInfo()

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        //存資料到資料庫
        props.setInfoComplete(true);
        props.setCompanyName(values.CompanyName);
        sendInfo({
            companyName: values.CompanyName,
            companyNumber: values.CompanyNumber,
            companyIndustry: values.Industry,
            annualTurnover: values.AnnualTurnover,
            levelofGovernance: values.LevelofGovernance,
            EPS: values.EPS,
            ROE: values.ROE,
            annualWaterUsage: values.AnnualWaterUsage,
            annualWaterReturn: values.AnnualWaterReturn,
            scope1: values.Scope1,
            scope2: values.Scope2,
            scope3: values.Scope3,
            waste: values.Waste,
            societyExpense: values.SocietyExpense,
            societyPerformance: values.SocietyPerformance,
            volunteer: values.Volunteer,
            guarantee: values.Guarantee,
            guaranteeAgency: values.GuaranteeAgency
        })
    };

    return (
        <Layout>
            <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal">
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Header>
            <Layout>
                <Sider style={{ background: '#40a72d' }}></Sider>
                <Content>
                    <Form name="company_info" {...formItemLayout} onFinish={onFinish}>
                        <h1 className="info_title">企業資本資料</h1>
                        <Form.Item label="公司名稱"
                            name="CompanyName"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your company name!',
                                },
                            ]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="公司統一編號"
                            name="CompanyNumber"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your company number!',
                                },
                            ]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="公司所屬產業"
                            name="Industry"
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

                        <Form.Item label="2020年營業額">
                            <Form.Item name="AnnualTurnover" noStyle>
                                <InputNumber style={{ width: "270px" }} />
                            </Form.Item>
                            <span className="ant-form-text">萬元</span>
                        </Form.Item>

                        <Divider />
                        <h2 className="info_section_title">治理 Governance</h2>

                        <Form.Item label="公司治理評鑑等級"
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

                        <Form.Item label="該年度每股盈餘 EPS">
                            <Form.Item name="EPS" noStyle>
                                <InputNumber style={{ width: "252px" }} />
                            </Form.Item>
                            <span className="ant-form-text">元/每股</span>
                        </Form.Item>

                        <Form.Item label="該年度權益報酬率 ROE">
                            <Form.Item name="ROE" noStyle>
                                <InputNumber style={{ width: "285px" }} />
                            </Form.Item>
                            <span className="ant-form-text">%</span>
                        </Form.Item>

                        <Divider />
                        <h2 className="info_section_title">環境 Environment</h2>

                        <Form.Item label="總體用水量">
                            <Form.Item name="AnnualWaterUsage" noStyle>
                                <InputNumber style={{ width: "240px" }} />
                            </Form.Item>

                            <span className="ant-form-text">立方公尺</span>
                        </Form.Item>

                        <Form.Item label="水資源回收量">
                            <Form.Item name="AnnualWaterReturn" noStyle>
                                <InputNumber style={{ width: "240px" }} />
                            </Form.Item>

                            <span className="ant-form-text">立方公尺</span>
                        </Form.Item>

                        <Form.Item label="溫室氣體範疇一排放量">
                            <Form.Item name="Scope1" noStyle>
                                <InputNumber style={{ width: "185px" }} />
                            </Form.Item>

                            <span className="ant-form-text">公噸二氧化碳當量</span>
                        </Form.Item>

                        <Form.Item label="溫室氣體範疇二排放量">
                            <Form.Item name="Scope2" noStyle>
                                <InputNumber style={{ width: "185px" }} />
                            </Form.Item>

                            <span className="ant-form-text">公噸二氧化碳當量</span>
                        </Form.Item>

                        <Form.Item label="溫室氣體範疇三排放量">
                            <Form.Item name="Scope3" noStyle>
                                <InputNumber style={{ width: "185px" }} />
                            </Form.Item>

                            <span className="ant-form-text">公噸二氧化碳當量</span>
                        </Form.Item>

                        <Form.Item label="廢棄物總重量">
                            <Form.Item name="Waste" noStyle>
                                <InputNumber style={{ width: "270px" }} />
                            </Form.Item>

                            <span className="ant-form-text">公噸</span>
                        </Form.Item>

                        <Divider />
                        <h2 className="info_section_title">社會 Society</h2>

                        <Form.Item label="投入社會公益總支出">
                            <Form.Item name="SocietyExpense" noStyle>
                                <InputNumber style={{ width: "270px" }} />
                            </Form.Item>

                            <span className="ant-form-text">萬元</span>
                        </Form.Item>

                        <Form.Item label="投入社會公益總績效">
                            <Form.Item name="SocietyPerformance" noStyle>
                                <InputNumber style={{ width: "270px" }} />
                            </Form.Item>

                            <span className="ant-form-text">萬元</span>
                        </Form.Item>

                        <Form.Item label="投入社會公益志工總人次">
                            <Form.Item name="Volunteer" noStyle>
                                <InputNumber style={{ width: "270px" }} />
                            </Form.Item>

                            <span className="ant-form-text">人次</span>
                        </Form.Item>

                        <Form.Item label="以上資料是否獲第三方認證"
                            name="Guarantee"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please pick an item!',
                                },]}>
                            <Radio.Group>
                                <Radio value="yes">是</Radio>
                                <Radio value="no">否</Radio>
                            </Radio.Group>
                        </Form.Item>

                        <Form.Item label="第三方認證單位"
                            name="GuaranteeAgency"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please pick an option!',
                                },]}>
                            <Select placeholder="Please select an option">
                                <Option value="NA">無，未接受第三方認證</Option>
                                <Option value="EY">安永聯合會計師事務所 (EY)</Option>
                                <Option value="Deloitte">勤業眾信聯合會計師事務所 (Deloitte)</Option>
                                <Option value="KPMG">安侯建業聯合會計師事務所 (KPMG)</Option>
                                <Option value="PwC">資誠聯合會計師事務所 (PwC)</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            style={{ padding: '30px 0 70px 600px' }}>
                            <Button type="primary" htmlType="submit">
                                Submit
                    </Button>
                        </Form.Item>
                    </Form>
                </Content>
                <Sider style={{ background: '#40a72d' }}></Sider>
            </Layout>
        </Layout >
    );
};

export default CompanyInfoInput