export const theme = {
  colors: {
    primary: '#7F1E1E',
    primary2: '#A8322D',
    cream: '#F6ECDD',
    paper: '#FFF8EE',
    beige: '#E8D5BB',
    beigeDeep: '#D7BE9C',
    line: '#D8C4AA',
    ink: '#211F1D',
    muted: '#6D655D',
    soft: '#EFE2D2',
    olive: '#657D50',
    teal: '#5F8F88',
    mustard: '#C5A63A',
    brown: '#56351F',
    tan: '#B69A77',
  },
  radius: { sm: '8px', md: '14px', lg: '22px', pill: '999px' },
  shadow: '0 10px 28px rgba(61, 42, 24, 0.08)',
} as const;

export type AppTheme = typeof theme;
