import React from 'react';

import Card from './Card';
export default function Deck1({ deck1 }) {
  return (
    <div className='deck'>
      {Object.keys(deck1).map((key) => (
        <Card key={key} details={deck1[key]} classN='deckCard' />
      ))}
    </div>
  );
}
