import React, { useState } from 'react'
import { Input } from 'antd'
import useCompanyInfo from '../useCompanyInfo'
import './CompanyInfo.css'

const CompanyInfo = (props) => {
    const { status, info, sendInfo } = useCompanyInfo()

    return (
        <div className="App">
            <div className="App-title">
                <h1>{props.companyName}的基本資料</h1>
            </div >
            <div className="App-messages">
                {info.length === 0 ? (<p>No Data...</p>
                ) : (
                        <>
                            < p style={{ marginBottom: '5px' }}>公司名稱</p>
                            <Input value={info[0].companyName} disabled={true} style={{ cursor: 'auto', color: '#a2a0a0' }} />

                            <p style={{ marginBottom: '5px', marginTop: '15px' }}>公司統一編號</p>
                            <Input value={info[0].companyNumber} disabled={true} style={{ cursor: 'auto', color: '#a2a0a0' }} />

                            <p style={{ marginBottom: '5px', marginTop: '15px' }}>公司所屬產業</p>
                            <Input value={info[0].companyIndustry} disabled={true} style={{ cursor: 'auto', color: '#a2a0a0' }} />
                        </>
                    )}
            </div>
        </div >
    )
}

export default CompanyInfo
