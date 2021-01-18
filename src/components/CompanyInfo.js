import React, { useState } from 'react'
import { Input, Tabs } from 'antd'
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
                            <p>公司名稱</p>
                            <Input value={info[i].companyName} disabled={true} />

                            <p>公司統一編號</p>
                            <Input value={info[i].companyNumber} disabled={true} />

                            <p>公司所屬產業</p>
                            <Input value={info[i].companyIndustry} disabled={true} />

                            <p>公司2020年度營業額</p>
                            <Input value={info[i].annualTurnover} disabled={true} />
                            <span>萬元</span>

                            <h2>治理 Governance</h2>

                            <p>2020年度每股盈餘 EPS</p>
                            <Input value={info[i].EPS} disabled={true} />
                            <span>元/每股</span>

                            <p>2020年度權益報酬率 ROE</p>
                            <Input value={info[i].ROE} disabled={true} />
                            <span>%</span>

                            <h2>環境 Environment</h2>

                            <p>2020年度總體用水量</p>
                            <Input value={info[i].annualWaterUsage} disabled={true} />
                            <span>立方公尺</span>

                            <p>2020年度水資源回收量</p>
                            <Input value={info[i].annualWaterReturn} disabled={true} />
                            <span>立方公尺</span>

                            <p>2020年度溫室氣體範疇一排放量</p>
                            <Input value={info[i].scope1} disabled={true} />
                            <span>公噸二氧化碳當量</span>

                            <p>2020年度溫室氣體範疇二排放量</p>
                            <Input value={info[i].scope2} disabled={true} />
                            <span>公噸二氧化碳當量</span>

                            <p>2020年度溫室氣體範疇三排放量</p>
                            <Input value={info[i].scope3} disabled={true} />
                            <span>公噸二氧化碳當量</span>

                            <p>2020年度廢棄物總重量</p>
                            <Input value={info[i].waste} disabled={true} />
                            <span>公噸</span>

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
                        </div>
                    )}
                </TabPane>
                <TabPane tab="產業資料比較" key="2">
                    Content of Tab Pane 2
                </TabPane>
            </Tabs>

        </div >
    )
}

export default CompanyInfo
