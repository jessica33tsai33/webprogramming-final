import { useState } from 'react'
const client = new WebSocket('ws://140.112.63.231:4000')

const useCompanyInfo = () => {
  const [info, setInfo] = useState([])
  const [status, setStatus] = useState({})

  client.onmessage = (message) => {
    const { data } = message
    const [task, payload] = JSON.parse(data)
    // console.log(payload);
    switch (task) {
      case 'init': {
        // console.log("init")
        setInfo(() => payload)
        break
      }
      case 'output': {
        setInfo(() => [...info, ...payload])
        break
      }
      case 'status': {
        setStatus(payload)
        break
      }
      default:
        break
    }
  }

  const sendData = (data) => {
    client.send(JSON.stringify(data))
  }

  const sendInfo = (msg) => {
    sendData(['input', msg])
  }

  return {
    status,
    info,
    sendInfo
  }
}

export default useCompanyInfo

