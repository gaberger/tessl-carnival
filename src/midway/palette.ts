import { theme } from '../carnival';

const { colors } = theme;

/**
 * The midway map's space palette. Tent violets, starlight and golds come from
 * the carnival theme; the sky, ground, paths and other scenery shades only the
 * map uses live here. Scenery keeps the names of what it stands in for: "grass"
 * is moon dust, "hedge" is alien plant life, "cloud" is a wisp of nebula and
 * "wood" is hull metal.
 */
export const palette = {
  sky: '#1a1450',
  skyHigh: '#05061a',
  star: '#f2f5ff',
  cloud: '#3a2a7a',
  cloudShade: '#2a1f63',
  haze: '#6a4fc0',

  grass: '#4b4f73',
  grassDark: '#3d4062',
  grassEdge: '#34375a',
  grassLight: '#5a5f85',
  path: '#aeb6d9',
  pathShade: '#8f98c0',
  hedge: '#2a9d9a',
  hedgeDark: '#1f7a80',
  hedgeLight: '#45c9bb',
  shadow: 'rgba(5, 6, 26, 0.4)',

  violet: colors.stripeA,
  violetShade: '#4c28b8',
  cream: colors.stripeB,
  creamShade: '#b4bfe6',
  gold: colors.accent,
  goldShade: '#e0a91c',
  blue: '#2b6fe0',
  blueShade: '#1d4fa8',
  sky2: colors.water,
  pink: '#e96bd6',
  pinkShade: '#c44bb3',
  wood: colors.wood,
  woodDark: '#333c5c',
  woodLight: '#7a86ad',
  board: '#8f9bc2',
  metal: '#dfe3f5',
  metalShade: '#a5acd0',
  ink: colors.background,
  opening: '#14163a',
  closed: '#6d7299',
  closedShade: '#555a80',
  white: '#ffffff',

  skins: ['#f1c27d', '#c68642', '#8d5524', '#e0ac69', '#ffdbac'],
  hairs: ['#3b2219', '#1b1035', '#a55728', '#e6c35c', '#6b4429'],
  shirts: [colors.water, '#7bd389', '#b48ee0', colors.danger, '#2b6fe0', colors.stripeB],
  pants: ['#2d3a6b', '#3b2a4f', '#5a4a3a'],
  bunting: [colors.stripeA, colors.accent, '#2b6fe0', colors.stripeB],
  balloons: [colors.stripeA, colors.accent, '#2b6fe0', colors.water, '#e96bd6'],
} as const;
