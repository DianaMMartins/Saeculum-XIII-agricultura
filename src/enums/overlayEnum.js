import { player } from '../player';

export const gameMenu = {
  class: "game-menu",
  h1: "Saeculum XIII agricultura",
  h2: "Carpere usquam ut incipere!",
  p: "translation: Click anywhere to begin!",
};

export const tutorial = {
  class: 'game-tutorial',
  h1: "Game Play",
  p: ["click on the soil squares", "they tell you what you need to do", "the pick, allows you to air the soil", "the poop, allows you to fertilize the soil", "choose any of the seeds to plant your crop, different seeds have different stats", "the water drop, allows you to water your crop", "the basket, allows you to sell your crop"],
  h2: 'Your goal is to buy this land while paying your tithe/taxes on time!',
}

export const gameOver = {
  class: "game-over",
  h1: "TU MORTUS ES",
  h2: "Te ad mortem suspensi sunt",
  p: "translation: You have been hanged to death",
  h3: 'Your score: ' + player.cash,
};
