export interface Options {
  id: number;
  name: string;
  checked: boolean;
}

export const defaultOptions = [
  { id: 1, name: "Rocket League", checked: true },
  { id: 2, name: "League of legends", checked: true },
  { id: 3, name: "Rocket League", checked: true },
  { id: 4, name: "League of legends", checked: true },
  { id: 5, name: "Rocket League", checked: true },
  { id: 6, name: "League of legends", checked: true },
  { id: 7, name: "Rocket League", checked: true },
  { id: 8, name: "League of legends", checked: true },
  { id: 9, name: "Rocket League", checked: true },
  { id: 10, name: "League of legends", checked: true },
];

export interface Game {
  id: number;
  name: string;
  image?: string;
  durationGame: number;
}

export const Games = [
  { id: 1, name: "Rocket League", durationGame: 7 },
  { id: 2, name: "League of legends", durationGame: 40 },
  { id: 3, name: "Smash", durationGame: 4 },
  { id: 4, name: "PUBG", durationGame: 25 },
];
