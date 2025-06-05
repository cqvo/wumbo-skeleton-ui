export const styleColorOptions = [
	'primary',
	'tonal',
	'outlined',
	'secondary',
	'tonal-secondary'
] as const;

export type StyleColor = (typeof styleColorOptions)[number];

export const presetColorOptions = [
	'preset-filled-primary-500',
	'preset-tonal-primary',
	'preset-outlined-primary-500',
	'preset-filled-secondary-500',
	'preset-tonal-secondary'
] as const;

export type PresetColor = (typeof presetColorOptions)[number];

export const styleColorMap: Record<StyleColor, PresetColor> = {
	primary: 'preset-filled-primary-500',
	tonal: 'preset-tonal-primary',
	outlined: 'preset-outlined-primary-500',
	secondary: 'preset-filled-secondary-500',
	'tonal-secondary': 'preset-tonal-secondary'
} as const;

export type PresetColorMap = typeof styleColorMap;
