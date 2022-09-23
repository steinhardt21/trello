import React from 'react'
import PropTypes from 'prop-types';

import './CardBoard.scss'
import CardTask from '../CardTask/CardTask'

const CardBoard = ({title, cards = []}) => {
  return (
    <div className={'CardBoard'}>
      {title}
      {cards.map(card => 
        <CardTask key={card.id} />  
      )}
    </div>
  )
}

PropTypes.CardBoard = {
  title: PropTypes.string,
  cards: PropTypes.object
}

export default CardBoard
