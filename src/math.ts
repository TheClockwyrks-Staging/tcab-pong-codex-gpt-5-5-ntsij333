export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

export function signChoice(random: () => number): 1 | -1 {
  return random() < 0.5 ? 1 : -1;
}
