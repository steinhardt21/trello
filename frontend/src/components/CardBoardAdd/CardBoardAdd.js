import React from 'react'
import PropTypes from 'prop-types';

import './CardBoardAdd.scss'

const CardBoardAdd = () => {
  return (
    <div className={'CardBoardAdd'}>{'Create new board'}</div>
  )
}

PropTypes.CardBoardAdd = {
  title: PropTypes.string
}

export default CardBoardAdd
