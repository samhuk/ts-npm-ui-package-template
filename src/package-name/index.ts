/* This is the entrypoint ts file for a ui component. The component should return an object
 * that extends { rendered: { element: HTMLElement } }.
 */

import { PackageNameOptions, PackageName } from './types'

export const createPackageName = (options: PackageNameOptions): PackageName => {
  const element = document.createElement('div')
  element.classList.add('com-package-name')

  element.textContent = options.initialText

  return {
    rendered: { element },
    updateText: newText => element.textContent = newText,
  }
}
