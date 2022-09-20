import React from 'react'
import {useParams} from 'react-router-dom'

import './Board.scss'

const Board = () => {
  const params = useParams()
  const idBoard = params.boardId
  return (
    <div className='boardPage'>
      <h1>Board {idBoard}</h1>
    </div>
  )
}

export default Board