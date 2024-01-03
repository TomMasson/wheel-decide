export interface Options {
  id: number;
  name: string;
  checked: boolean;
}

export const defaultOptions = [
  { id: 1, name: "Rocket League - Ranked", checked: true },
  { id: 2, name: "Rocket League - 1v1", checked: true },
  { id: 3, name: "League of legends - Ranked", checked: true },
  { id: 4, name: "League of legends - Arena", checked: true },
  { id: 5, name: "League of legends - Aram", checked: true },
  { id: 6, name: "Lethal Company", checked: true },
  { id: 7, name: "Smash", checked: true },
  { id: 8, name: "Street Fighter 6", checked: true },
  { id: 9, name: "PUBG", checked: true },
  { id: 10, name: "Garry's Mod", checked: true },
];

export interface Game {
  id: number;
  name: string;
  image?: string;
  durationGame: number;
}

export const Games = [
  {
    id: 1,
    name: "Rocket League",
    durationGame: 7,
    image:
      "https://cdn1.epicgames.com/offer/9773aa1aa54f4f7b80e44bef04986cea/EGS_RocketLeague_PsyonixLLC_S1_2560x1440-0f2f0dbbb161b884d50f2ca09f4110bf",
  },
  {
    id: 2,
    name: "Rocket League - 1v1",
    durationGame: 21,
    image:
      "https://cdn1.epicgames.com/offer/9773aa1aa54f4f7b80e44bef04986cea/EGS_RocketLeague_PsyonixLLC_S1_2560x1440-0f2f0dbbb161b884d50f2ca09f4110bf",
  },
  {
    id: 3,
    name: "LOL - Arena",
    durationGame: 20,
    image:
      "https://www.pedagojeux.fr/wp-content/uploads/2019/11/1280x720_LoL.jpg",
  },
  {
    id: 4,
    name: "LOL - Aram",
    durationGame: 30,
    image:
      "https://www.pedagojeux.fr/wp-content/uploads/2019/11/1280x720_LoL.jpg",
  },
  {
    id: 5,
    name: "LOL - Ranked",
    durationGame: 40,
    image:
      "https://www.pedagojeux.fr/wp-content/uploads/2019/11/1280x720_LoL.jpg",
  },
  {
    id: 6,
    name: "Lethal Company",
    durationGame: 60,
    image:
      "https://image.jeuxvideo.com/medias-sm/170110/1701098978-2715-jaquette-avant.jpg",
  },
  {
    id: 7,
    name: "Smash",
    durationGame: 4,
    image: "https://www.smashbros.com/data/bs/fr_FR/en_GB/img/1_US.jpg",
  },
  {
    id: 8,
    name: "Street Fighter 6",
    durationGame: 10,
    image:
      "https://cdn.akamai.steamstatic.com/steam/apps/1364780/capsule_616x353.jpg?t=1701317439",
  },
  {
    id: 9,
    name: "PUBG",
    durationGame: 25,
    image: "https://wstatic-prod.pubg.com/web/live/static/og/img-og-pubg.jpg",
  },
  {
    id: 10,
    name: "Garry's Mod",
    durationGame: 20,
    image:
      "https://cdn.akamai.steamstatic.com/steam/apps/4000/ss_c13ffded1d71bedfa7ede94c11cbd21fbd21a32c.1920x1080.jpg?t=1663621793",
  },
];
