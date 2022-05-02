export type MyComponentOptions = {
  initialText: string
}

export type MyComponent = {
  element: HTMLElement
  updateText: (newText: string) => string
}

export const createMyComponent = (options: MyComponentOptions): MyComponent => {
  const element = document.createElement('div')
  element.classList.add('com-my-component')

  element.textContent = options.initialText

  return {
    element,
    updateText: newText => element.textContent = newText,
  }
}
