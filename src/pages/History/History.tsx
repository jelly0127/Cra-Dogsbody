import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from '../../MyContext'

export default function History() {
  const { Name } = useContext(MyContext)
  return (
    <>
      <div>History page</div>
      <p>useContext</p>
      <div>接收到的context是{Name}</div>
      <Link to={'/'}>black</Link>
    </>
  )
}
