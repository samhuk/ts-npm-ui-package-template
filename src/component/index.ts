export type ComponentOptions = {
  initialText: string
}

export type Component = {
  element: HTMLElement
  updateText: (newText: string) => string
}

export const createComponent = (options: ComponentOptions): Component => {
  const element = document.createElement('div')
  element.classList.add('com-my-component')

  element.textContent = options.initialText

  return {
    element,
    updateText: newText => element.textContent = newText,
  }
}
