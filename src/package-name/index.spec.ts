import { createPackageName } from '.'

describe('package-name', () => {
  describe('createPackageName', () => {
    const fn = createPackageName
    test('basic test', () => {
      const instance = fn({ initialText: 'foo' })
      expect(instance.rendered.element.textContent).toEqual('foo')

      instance.updateText('bar')
      expect(instance.rendered.element.textContent).toEqual('bar')
    })
  })
})
