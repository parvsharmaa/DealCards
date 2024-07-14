import React from 'react';
import './Card.css';

const logoMap = { hearts: '❤️', diamonds: '♦️', spades: '♠️', clubs: '♣️' };

const Card = ({ suit, value }) => {
  if (!suit || !value) return <div className='card empty'>No Card</div>;

  return (
    <div className={`card ${suit}`}>
      <div className='corner'>
        <div className='value'>{value}</div>
        <div className='suit'>{logoMap[suit]}</div>
      </div>

      <div className='corner bottom'>
        <div className='suit'>{logoMap[suit]}</div>
        <div className='value'>{value}</div>
      </div>
    </div>
  );
};

export default Card;
