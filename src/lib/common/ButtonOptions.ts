export const buttonSizeOptions = ['btn-sm', 'btn-base', 'btn-lg'] as const;

export type ButtonSize = (typeof buttonSizeOptions)[number];
