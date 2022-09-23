import React from 'react'
import PropTypes from 'prop-types'
import Button from '@mui/material/Button';

import './ColumnBoard.scss'
import CardTask from '../CardTask/CardTask'

const ColumnBoard = ({title}) => {
  return (
    <div className='columnBoard'>
      <h2>{title}</h2>
      <CardTask />
      <Button variant="contained">Primary</Button>
    </div>
  )
}

PropTypes.ColumnBoard = {
  title: PropTypes.string
}

export default ColumnBoard
