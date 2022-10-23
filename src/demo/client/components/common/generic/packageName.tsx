import React from 'react'
import { createPackageName } from '../../../../../package-name'
import { PackageName, PackageNameOptions } from '../../../../../package-name/types'
import Com from './base'

/**
 * Thin wrapper around the MyComponent component
 */
export const render = (props: { options: PackageNameOptions, setComponent?: (component: PackageName) => void }) => (
  <Com
    componentOptions={props.options}
    createComponent={createPackageName}
    setComponent={props.setComponent}
    name="component"
  />
)

export default render
