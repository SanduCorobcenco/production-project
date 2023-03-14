type Mods = Record<string, boolean | string>
const obj: Mods = {
  hovered: false
}

export function classNames (cls: string, mods: Mods = {},
  additional: string[] = []): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className)
  ]
    .join(' ')
}

classNames('remove-btn',
  { hovered: true, selectable: true, red: true }, ['pdg'])
