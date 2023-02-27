import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from '../../MyContext'
import styled from 'styled-components'
import { Button } from 'antd'

const Box = styled.div`
  color: #ffffff;
`

export default function History() {
  const { Name, setName } = useContext(MyContext)
  return (
    <Box>
      <div>History page</div>
      <h1>useContext</h1>
      <div>接收到的context是{Name}</div>
      <Button
        onClick={() => {
          setName('test')
        }}
      >
        changeName "test"
      </Button>
      <Link to={'/'}>black</Link>
    </Box>
  )
}
