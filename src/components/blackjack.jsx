import React from 'react';

export default class Blackjack extends React.Component {
  render() {
    return(
      <p></p>
    );
  }
}

let cardNumber = [{name: "Ace", value: 11}, {name: "King", value: 10}, {name: "Queen", value: 10}, {name: "Jack", value: 10}, {name: "Ten", value: 10}, {name: "Nine", value: 9}, {name: "Eight", value: 8}, {name: "Seven", value: 7}, {name: "Six", value: 6}, {name: "Five", value: 5}, {name: "Four", value: 4}, {name: "Three", value: 3}, {name: "Two", value: 2} ];
let cardSuit = [{name: "Hearts"}, {name: "Dimonds"}, {name: "Spades"}, {name: "Clubs"}];

function newDeck(cardNumber, cardSuit){
  let deck = []
  for(let i=0; i<cardSuit.length; i++){
    for(let j=0; j<cardNumber.length; j++){ 
      deck.push([cardNumber[j].value, cardNumber[j].name, cardSuit[i].name])
    }
  }; 
  return deck;
}; let deck = newDeck(cardNumber, cardSuit);

let total = 0;

function newCard(j){ 
  let hand = []
  for(let i=0; i<j; i++){
    let x = deck.length; 
    hand.push(deck.splice(Math.floor(Math.random() * x), 1));
    total += hand[i][0][0];
  }
  return hand;
}; 

let hand = newCard(2);

console.log("Total: " + total);
console.log(hand[0][0][1]+" of "+hand[0][0][2]);
console.log(hand[1][0][1]+" of "+hand[0][0][2]);
console.log(deck);