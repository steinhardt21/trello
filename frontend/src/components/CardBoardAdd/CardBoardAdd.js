import React from 'react'
import PropTypes from 'prop-types';

import './CardBoardAdd.scss'

const CardBoardAdd = ({handleClick}) => {
  return (
    <div onClick={() => handleClick(true)} className={'CardBoardAdd'}>{'Create new board'}</div>
  )
}

PropTypes.CardBoardAdd = {
  handleClick: PropTypes.func
}

export default CardBoardAdd
