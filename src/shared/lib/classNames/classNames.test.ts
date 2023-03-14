import { classNames } from './classNames'

describe('classNames', () => {
  test('with one parameter', () => {
    expect(classNames('someClass')).toBe('someClass')
  })

  test('with multiple parameters', () => {
    const expected = 'someClass class1 class2'
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected)
  })

  test('with mods', () => {
    const expected = 'someClass class1 class2 hovered scrollable'
    expect(classNames('someClass', { hovered: true, scrollable: true },
      ['class1', 'class2'])).toBe(expected)
  })

  test('with 1 false mode', () => {
    const expected = 'someClass class1 class2 hovered'
    expect(classNames('someClass', { hovered: true, scrollable: false },
      ['class1', 'class2'])).toBe(expected)
  })

  test('with mods undefined', () => {
    const expected = 'someClass class1 class2 hovered'
    expect(classNames('someClass',
      { hovered: true, selectable: '' },
      ['class1', 'class2'])).toBe(expected)
  })
})
