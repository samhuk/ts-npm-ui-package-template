export type DataTableOptions = {
  initialText: string
}

export type DataTable = {
  element: HTMLElement
  updateText: (newText: string) => string
}

export const createDataTable = (options: DataTableOptions): DataTable => {
  const element = document.createElement('div')
  element.classList.add('com-my-component')

  element.textContent = options.initialText

  return {
    element,
    updateText: newText => element.textContent = newText,
  }
}
