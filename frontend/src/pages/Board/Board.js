import React, {useState} from 'react'
import {useParams} from 'react-router-dom'

import './Board.scss'
import ColumnBoard from '../../components/ColumnBoard/ColumnBoard'

const columnsFake = [
  {
    id: 1,
    name: 'To Do'
  },
  {
    id: 2,
    name: 'In Progress'
  },
  {
    id: 3,
    name: 'Testing'
  },
  {
    id: 4,
    name: 'Done'
  },
  {
    id: 5,
    name: 'Column 5'
  },
  {
    id: 6,
    name: 'Column 6'
  }
]

const cardsColumnOneFake = [
  {
    id: 1,
    name: 'Task 1',
    description: 'well meaning and kindly. a benevolent smile'
  },
  {
    id: 2,
    name: 'Task 2',
    description: 'well meaning and kindly. a benevolent smile'
  },
  {
    id: 3,
    name: 'Task 3',
    description: 'well meaning and kindly. a benevolent smile'
  }
]

const Board = () => {
  const [columns, setColumns] = useState(columnsFake)
  const [cards, setCards] = useState(cardsColumnOneFake)

  const params = useParams()
  const idBoard = params.boardId

  

  

  const addTaskToColumn = () => {
    
  }

  return (
    <div className='boardPage'>
      <h1>Board {idBoard}</h1>
      <div className='column'>
        {columns.map(column => <ColumnBoard title={column.name} cards={cards} />)}
      </div>
    </div>
  )
}

export default Board