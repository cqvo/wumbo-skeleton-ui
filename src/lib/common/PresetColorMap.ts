export const styleColorMap = {
  'primary': 'preset-filled-primary-500',
  'tonal': 'preset-tonal-primary',
  'outlined': 'preset-outlined-primary-500',
  'secondary': 'preset-filled-secondary-500',
  'tonal-secondary': 'preset-tonal-secondary',
} as const;

export type PresetColorMap = typeof styleColorMap;