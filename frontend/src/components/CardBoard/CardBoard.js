import React from 'react'
import PropTypes from 'prop-types';

import './CardBoard.scss'

const CardBoard = ({title}) => {
  return (
    <div className={'CardBoard'}>{title}</div>
  )
}

PropTypes.CardBoard = {
  title: PropTypes.string
}

export default CardBoard
