export type Rendered = {
  /**
   * The root element of the component
   */
  element: HTMLElement
}

/**
 * Options for the creation of PackageName
 */
export type PackageNameOptions = {
  initialText: string
}

export type PackageName = {
  rendered: Rendered
  /**
   * Updates the text that is shown within the component
   */
  updateText: (newText: string) => string
}
