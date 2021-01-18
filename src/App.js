import './App.css'
import React, { useState } from 'react'
import {Input} from 'antd'
import useCompanyInfo from './useCompanyInfo'
import Login from './components/Login'
import CompanyInfoInput from './components/CompanyInfoInput'
import CompanyInfo from './components/CompanyInfo'

function App() {
  const [login, setLogin] = useState(false)
  const [infoComplete, setInfoComplete] = useState(false)
  const [companyName, setCompanyName] = useState('')

  return (
    (login === false) ?
      (
        <div>
          <Login login={login} setLogin={setLogin} />
        </div>
      ) : (
        (infoComplete === false) ?
          (
            <CompanyInfoInput infoComplete={infoComplete} setInfoComplete={setInfoComplete} companyName={companyName} setCompanyName={setCompanyName} />
          ) : (
            <CompanyInfo companyName={companyName}/>
          )
      )
  )
}

export default App
