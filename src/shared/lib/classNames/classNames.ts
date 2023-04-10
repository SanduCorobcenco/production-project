type Mods = Record<string, boolean | undefined>

export function classNames (cls: string, mods: Mods = {},
  additional: any[] = []): string | undefined {
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
