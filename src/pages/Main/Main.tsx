import { Button, message } from 'antd'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getData } from '../../http/api'
import styled from 'styled-components'

const Box = styled.div`
  color: #ffffff;
`
export default function Main() {
  const [data, setData] = useState('')
  return (
    <Box>
      <div>Main</div>

      <Link to={'/'}>black</Link>
      <Button onClick={() => message.success('全局提示信息')}>Test</Button>
      <Button
        onClick={() => {
          getData({ id: 1 })
            .then((res: any) => {
              setData(res.name)
              console.log(res)
              message.success('getDataSuccess!')
            })
            .catch(err => {
              console.log(err)
            })
        }}
      >
        Http
      </Button>
      <br />
      <h3>{data}</h3>
    </Box>
  )
}
