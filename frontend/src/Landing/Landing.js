import React, {useState, useEffect} from 'react'

import './Landing.scss'
import CardBoard from '../components/CardBoard/CardBoard'
import CardBoardAdd from '../components/CardBoardAdd/CardBoardAdd'

const Landing = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  const getBoards = async () => {
    try {
      const response = await fetch('http://localhost:3001/boards', {mode:'cors'})
      const data = await response.json()
      setData(data)
      setLoading(false)
    } catch(error) {
      console.log('**** Error ', error)
    }
  }

  useEffect(() => {
    getBoards()
  }, [])

  return (
    <div className='landingPage'>
      <h1>Trello clone</h1>
      <div className='boardContainer'>
        {!loading ? 
          Object.values(data).map((board, idx) => <CardBoard key={idx} title={board.name}/>) 
          : <p>{'No boards'}</p> 
        }
        <CardBoardAdd />
      </div>
    </div>
  )
}

export default Landing;
