import { useState } from 'react'
// import { w3cwebsocket as W3CWebSocket } from 'websocket'

// const client = new W3CWebSocket('ws://localhost:4000')
const client = new WebSocket('ws://localhost:4000')

const useCompanyInfo = () => {
  const [info, setInfo] = useState([])
  const [status, setStatus] = useState({})
  const [opened, setOpened] = useState(false)

  client.onmessage = (message) => {
    const { data } = message
    const [task, payload] = JSON.parse(data)
    console.log(payload);
    switch (task) {
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

  client.onopen = () => {
    setOpened(true)
  }

  const sendData = (data) => {
    client.send(JSON.stringify(data))
  }

  const sendInfo = (msg) => {
    sendData(['input', msg])
  }

  return {
    status,
    opened,
    info,
    sendInfo
  }
}

export default useCompanyInfo

