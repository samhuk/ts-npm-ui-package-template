import React from 'react'
import { PackageName, PackageNameOptions } from '../../../../package-name/types'
import MyComponentWithReact from '../common/generic/packageName'
import ItemBase from './itemBase'

const COMPONENT_OPTIONS: PackageNameOptions = {
  initialText: 'Hello, World!',
}

const Operations = (props: { component: PackageName }) => (
  <button
    type="button"
    className="button--white"
    onClick={() => props.component.updateText('New text!')}
  >
    Update the text of the component
  </button>
)

export const render = () => (
  <ItemBase component={MyComponentWithReact} componentOptions={COMPONENT_OPTIONS} operationsComponent={Operations} />
)

export default render
