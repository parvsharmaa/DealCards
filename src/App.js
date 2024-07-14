import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';

const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'J', 'Q', 'K'];

// crates the deck of initial state
const createDeck = () => {
  let deck = [];
  for (let suit of suits) {
    for (let value of values) {
      deck.push({ suit, value });
    }
  }

  return deck;
};

// for setting the initial value of the cards
const shuffle = (deck) => {
  for (let i = deck.length - 1; i > 0; i--) {
    // get the randomized card index
    const randCard = Math.floor(Math.random() * (i + 1));

    [deck[i], deck[randCard]] = [deck[randCard], deck[i]];
  }

  return deck;
};

function App() {
  // for initial state set the shuffled deck
  const [deck, setDeck] = useState(shuffle(createDeck()));
  const [hand, setHand] = useState([]);

  useEffect(() => {
    // Draw initial 4 cards
    dealCards();
  }, []);

  const dealCards = () => {
    // check if all cards has been drawn
    if (deck.length === 0) return;

    // get the new 4 cards from the remaining deck
    const newHand = deck.slice(0, 4);

    // set the new cards to the hand
    setHand(newHand);
    // remove the 4 cards which has been drawn
    setDeck(deck.slice(4));
  };

  return (
    <div className='app'>
      <button onClick={dealCards} disabled={deck.length === 0}>
        Deal Cards
      </button>
      <div className='hand'>
        {hand.length > 0 && deck.length > 0 ? (
          hand.map((card, index) => {
            return <Card key={index} {...card}></Card>;
          })
        ) : (
          <div>All of the Cards have been played.</div>
        )}
      </div>
    </div>
  );
}

export default App;
