import React, { useState } from 'react'
import { Input, Tabs, Row, Col, Divider } from 'antd'
import useCompanyInfo from '../useCompanyInfo'
import './CompanyInfo.css'

const { TabPane } = Tabs;

const CompanyInfo = (props) => {
    const { status, info, sendInfo } = useCompanyInfo()

    const findCompany = (name) => {
        let length = info.length;
        let index = 0;
        for (let j = 0; j < length; j++) {
            if (info[j].companyName === name) {
                index = j;
                break;
            }
        }
        return index
    }

    let i = findCompany(props.companyName);
    let a = findCompany("平均");

    const companyPerformance = (name, industry, indicator) => {
        let j = findCompany(name);
        for (let k = 0; k < info.length; k++) {
            if (info[k].companyName === "平均" && info[k].companyIndustry === industry) {
                if (info[j][indicator] > info[k][indicator]) {
                    return (
                        <div className="better">勝</div>
                    )
                }

                else if (info[j][indicator] === info[k][indicator]) {
                    return (
                        <div className="equal">平手</div>
                    )
                }
                else if (info[j][indicator] < info[k][indicator]) {
                    return (
                        <div className="worse">敗</div>
                    )
                }
            }
        }
    }

    const showIndustry = (industry) => {
        if (industry === "light") {
            return "光電業"
        }
        else if (industry === "food") {
            return "食品業"
        }
        else if (industry === "finance") {
            return "金融業"
        }
    }


    return (
        <div className="Company-info">
            <div className="Company-title">
                <h1>{props.companyName}</h1>
            </div >
            <Tabs type="card" centered>
                <TabPane tab="公司資料" key="1">
                    {info.length === 0 ? (<p>Data Loading...</p>) : (
                        <div className="Company-data">
                            <h2>公司基本資料</h2>
                            <Row className="company-info-basic">
                                <Col span={7} >
                                    <p>公司名稱</p>
                                    <Input value={info[i].companyName} disabled={true} style={{ width: '100%' }} />

                                    <p>公司統一編號</p>
                                    <Input value={info[i].companyNumber} disabled={true} style={{ width: '100%' }} />
                                </Col>
                                <Col span={7} >
                                    <p>公司所屬產業</p>
                                    <Input value={info[i].companyIndustry} disabled={true} style={{ width: '100%' }} />

                                    <p>公司2020年度營業額</p>
                                    <Input value={info[i].annualTurnover} disabled={true} style={{ width: '100%' }} />
                                </Col>
                            </Row>

                            <Divider />
                            <h2>公司 ESG 資料</h2>

                            <Row className="company-info-esg">
                                <Col className="company-info-governance" span={7}>
                                    <h2>治理 Governance</h2>

                                    <p>2020年度每股盈餘 EPS</p>
                                    <Input value={info[i].EPS} disabled={true} />
                                    <span>元/每股</span>

                                    <p>2020年度權益報酬率 ROE</p>
                                    <Input value={info[i].ROE} disabled={true} />
                                    <span>%</span>
                                </Col>
                                <Col className="company-info-environment" span={7}>
                                    <h2>環境 Environment</h2>

                                    <p>2020年度總體用水量</p>
                                    <Input value={info[i].annualWaterUsage} disabled={true} />
                                    <span>立方公尺</span>

                                    <p>2020年度水資源回收量</p>
                                    <Input value={info[i].annualWaterReturn} disabled={true} />
                                    <span>立方公尺</span>

                                    <p>2020年度溫室氣體範疇一排放量</p>
                                    <Input value={info[i].scope1} disabled={true} />
                                    <span>公噸CO2</span>

                                    <p>2020年度溫室氣體範疇二排放量</p>
                                    <Input value={info[i].scope2} disabled={true} />
                                    <span>公噸CO2</span>

                                    <p>2020年度溫室氣體範疇三排放量</p>
                                    <Input value={info[i].scope3} disabled={true} />
                                    <span>公噸CO2</span>

                                    <p>2020年度廢棄物總重量</p>
                                    <Input value={info[i].waste} disabled={true} />
                                    <span>公噸</span>
                                </Col>
                                <Col className="company-info-society" span={7}>
                                    <h2>社會 Society</h2>

                                    <p>2020年度投入社會公益總支出</p>
                                    <Input value={info[i].societyExpense} disabled={true} />
                                    <span>萬元</span>

                                    <p>2020年度投入社會公益總績效</p>
                                    <Input value={info[i].societyPerformance} disabled={true} />
                                    <span>萬元</span>

                                    <p>2020年度投入社會公益志工總人次</p>
                                    <Input value={info[i].volunteer} disabled={true} />
                                    <span>人</span>
                                </Col>
                            </Row>
                        </div>
                    )}
                </TabPane>
                <TabPane tab="產業資料比較" key="2">
                    {info.length === 0 ? (<p>Data Loading...</p>) : (
                        <div className="Company-data">
                            <h2>在{showIndustry(info[i].companyIndustry)}中，{props.companyName}的ESG表現</h2>

                            <Row className="company-info-esg">
                                <Col className="ESG-title company-info-governance" span={24}>
                                    治理 Governance
                                </Col>
                                <Col className="performance company" span={10}>
                                    <h2>公司資料</h2>
                                    <p>2020年度每股盈餘 EPS</p>
                                    <Input value={info[i].EPS} disabled={true} />
                                    <span>元/每股</span>

                                    <p>2020年度權益報酬率 ROE</p>
                                    <Input value={info[i].ROE} disabled={true} />
                                    <span>%</span>
                                </Col>
                                <Col className="performance-compare" span={4}>
                                    <h2>表現</h2>
                                    <div className="better">勝</div>
                                    <div className="better">勝</div>
                                </Col>
                                <Col className="performance" span={10}>
                                    <h2>產業平均</h2>
                                    <p>2020年度每股盈餘 EPS</p>
                                    <Input value={info[i].EPS} disabled={true} />
                                    <span>元/每股</span>

                                    <p>2020年度權益報酬率 ROE</p>
                                    <Input value={info[i].ROE} disabled={true} />
                                    <span>%</span>
                                </Col>
                                <Col className="ESG-title company-info-environment" span={24}>
                                    環境 Environment
                                </Col>
                                <Col className="performance company" span={10}>
                                    <h2>公司資料</h2>
                                    <p>2020年度總體用水量</p>
                                    <Input value={info[i].annualWaterUsage} disabled={true} />
                                    <span>立方公尺</span>

                                    <p>2020年度水資源回收量</p>
                                    <Input value={info[i].annualWaterReturn} disabled={true} />
                                    <span>立方公尺</span>

                                    <p>2020年度溫室氣體範疇一排放量</p>
                                    <Input value={info[i].scope1} disabled={true} />
                                    <span>公噸CO2</span>

                                    <p>2020年度溫室氣體範疇二排放量</p>
                                    <Input value={info[i].scope2} disabled={true} />
                                    <span>公噸CO2</span>

                                    <p>2020年度溫室氣體範疇三排放量</p>
                                    <Input value={info[i].scope3} disabled={true} />
                                    <span>公噸CO2</span>

                                    <p>2020年度廢棄物總重量</p>
                                    <Input value={info[i].waste} disabled={true} />
                                    <span>公噸</span>
                                </Col>
                                <Col className="performance-compare" span={4}>
                                    <h2>表現</h2>
                                </Col>
                                <Col className="performance" span={10}>
                                    <h2>產業平均</h2>
                                    <p>2020年度總體用水量</p>
                                    <Input value={info[i].annualWaterUsage} disabled={true} />
                                    <span>立方公尺</span>

                                    <p>2020年度水資源回收量</p>
                                    <Input value={info[i].annualWaterReturn} disabled={true} />
                                    <span>立方公尺</span>

                                    <p>2020年度溫室氣體範疇一排放量</p>
                                    <Input value={info[i].scope1} disabled={true} />
                                    <span>公噸CO2</span>

                                    <p>2020年度溫室氣體範疇二排放量</p>
                                    <Input value={info[i].scope2} disabled={true} />
                                    <span>公噸CO2</span>

                                    <p>2020年度溫室氣體範疇三排放量</p>
                                    <Input value={info[i].scope3} disabled={true} />
                                    <span>公噸CO2</span>

                                    <p>2020年度廢棄物總重量</p>
                                    <Input value={info[i].waste} disabled={true} />
                                    <span>公噸</span>
                                </Col>
                                <Col className="ESG-title company-info-society" span={24}>
                                    社會 Society
                                </Col>
                                <Col className="performance company" span={10}>
                                    <h2>公司資料</h2>
                                    <p>2020年度投入社會公益總支出</p>
                                    <Input value={info[i].societyExpense} disabled={true} />
                                    <span>萬元</span>

                                    <p>2020年度投入社會公益總績效</p>
                                    <Input value={info[i].societyPerformance} disabled={true} />
                                    <span>萬元</span>

                                    <p>2020年度投入社會公益志工總人次</p>
                                    <Input value={info[i].volunteer} disabled={true} />
                                    <span>人</span>
                                </Col>
                                <Col className="performance-compare" span={4}>
                                    <h2>表現</h2>
                                </Col>
                                <Col className="performance" span={10}>
                                    <h2>產業平均</h2>
                                    <p>2020年度投入社會公益總支出</p>
                                    <Input value={info[i].societyExpense} disabled={true} />
                                    <span>萬元</span>

                                    <p>2020年度投入社會公益總績效</p>
                                    <Input value={info[i].societyPerformance} disabled={true} />
                                    <span>萬元</span>

                                    <p>2020年度投入社會公益志工總人次</p>
                                    <Input value={info[i].volunteer} disabled={true} />
                                    <span>人</span>
                                </Col>
                            </Row>
                        </div>
                    )}
                </TabPane>
            </Tabs>

        </div >
    )
}

export default CompanyInfo
